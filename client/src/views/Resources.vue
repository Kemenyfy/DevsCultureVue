<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <div class="mainBody">
          <div class="header">
            <h1 class="header__title">Resources Page</h1>
            <h2 class="header__subtitle">by/for Devs</h2>
          </div>
          <div class="cards" v-for="res in resourcesData" :key="res.id">
            <div class=" card [ is-collapsed ] ">
              <div class="card__inner [ js-expander ]">
                <span>{{res.name}}</span>
                <i class="far fa-folder"></i>
              </div>
              <div class="card__expander">
                <i class="fas fa-times cross [ js-collapser ]"></i>
                {{res.detailedDescription}}
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
 
</template>

<script>
import Nav from "@/components/Nav.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  components: {
    Nav,
    TopBar
  },
  data: function() {
    return {
      resourcesData: []
    };
  },
  mounted: function() {
    console.log(this.$route.params.subcategoryId);
    fetch(`https://localhost:5001/api/subcategory/resource/${this.$route.params.subcategoryId}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.resourcesData = data;
        setTimeout(this.toggleExpander, 0);
      });
  },
  methods: {
    toggleExpander: function() {
      var $cell = $(".card");

      //open and close card when clicked on card
      $cell.find(".js-expander").click(function() {
        var $thisCell = $(this).closest(".card");

        if ($thisCell.hasClass("is-collapsed")) {
          $cell
            .not($thisCell)
            .removeClass("is-expanded")
            .addClass("is-collapsed")
            .addClass("is-inactive");
          $thisCell.removeClass("is-collapsed").addClass("is-expanded");

          if ($cell.not($thisCell).hasClass("is-inactive")) {
            //do nothing
          } else {
            $cell.not($thisCell).addClass("is-inactive");
          }
        } else {
          $thisCell.removeClass("is-expanded").addClass("is-collapsed");
          $cell.not($thisCell).removeClass("is-inactive");
        }
      });

      //close card when click on cross
      $cell.find(".js-collapser").click(function() {
        var $thisCell = $(this).closest(".card");

        $thisCell.removeClass("is-expanded").addClass("is-collapsed");
        $cell.not($thisCell).removeClass("is-inactive");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);

$light-gray: #eceef1;
$gray: darken(#eceef1, 30%);
$slate: darken(#eceef1, 70%);
$turquoise: #1abc9c;

* {
  box-sizing: border-box;
}

body {
  background: $light-gray;
  font-family: "Slabo 27px", serif;
  color: $slate;
}

.mainBody {
  margin: 5em auto;
  max-width: 1000px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06);
}

.header {
  padding: 30px 30px 0;
  text-align: center;

  &__title {
    margin: 0;
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: 500;
    line-height: 1.1;
  }
  &__subtitle {
    margin: 0;
    font-size: 1.5em;
    color: $gray;
    font-family: "Yesteryear", cursive;
    font-weight: 500;
    line-height: 1.1;
  }
}

p {
  margin: 10px;
}
//Grid Container
.cards {
  padding: 15px;
  display: flex;
  flex-flow: row wrap;
}

//Cards
.card {
  margin: 15px;
  width: calc((100% / 3) - 30px);
  transition: all 0.2s ease-in-out;

  //media queries for stacking cards
  @media screen and (max-width: 991px) {
    width: calc((100% / 2) - 30px);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    .card__inner {
      background-color: $turquoise;
      transform: scale(1.05);
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    position: relative;
    cursor: pointer;

    background-color: $gray;
    color: $light-gray;
    font-size: 1.5em;
    text-align: center;

    transition: all 0.2s ease-in-out;

    &:after {
      transition: all 0.3s ease-in-out;
    }

    .fa {
      width: 100%;
      margin-top: 0.25em;
    }
  }

  //Expander
  &__expander {
    padding: 10px;
    transition: all 0.2s ease-in-out;
    background-color: $slate;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $light-gray;
    font-size: 1.5em;

    .fa {
      font-size: 0.75em;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }

  &.is-collapsed {
    .card__inner {
      &:after {
        content: "";
        opacity: 0;
      }
    }
    .card__expander {
      max-height: 0;
      min-height: 0;
      overflow: hidden;
      margin-top: 0;
      opacity: 0;
    }
  }

  &.is-expanded {
    .card__inner {
      background-color: $turquoise;

      &:after {
        content: "";
        opacity: 1;
        display: block;
        height: 0;
        width: 0;
        position: absolute;
        bottom: -30px;
        left: calc(50% - 15px);
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #333a45;
      }

      //folder open icon
      .fa:before {
        content: "\f115";
      }
    }

    .card__expander {
      max-height: 1000px;
      min-height: 200px;
      overflow: visible;
      margin-top: 30px;
      opacity: 1;
    }

    &:hover {
      .card__inner {
        transform: scale(1);
      }
    }
  }

  &.is-inactive {
    .card__inner {
      pointer-events: none;
      opacity: 0.5;
    }

    &:hover {
      .card__inner {
        background-color: $gray;
        transform: scale(1);
      }
    }
  }
}

.cross {
  position: absolute;
  top: 3px;
  right: 6px;
}

//Expander Widths

//when 3 cards in a row
@media screen and (min-width: 992px) {
  .card:nth-of-type(3n + 2) .card__expander {
    margin-left: calc(-100% - 30px);
  }
  .card:nth-of-type(3n + 3) .card__expander {
    margin-left: calc(-200% - 60px);
  }
  .card:nth-of-type(3n + 4) {
    clear: left;
  }
  .card__expander {
    width: calc(300% + 60px);
  }
}

//when 2 cards in a row
@media screen and (min-width: 768px) and (max-width: 991px) {
  .card:nth-of-type(2n + 2) .card__expander {
    margin-left: calc(-100% - 30px);
  }
  .card:nth-of-type(2n + 3) {
    clear: left;
  }
  .card__expander {
    width: calc(200% + 30px);
  }
}
</style>
