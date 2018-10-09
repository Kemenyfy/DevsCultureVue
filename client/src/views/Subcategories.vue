<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
      <TopBar />
      <div class="cards">
        <div class="card" v-for="sub in subcategoriesData" :key="sub.id">
          <img :src="`${sub.imageURL}`">
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>{{sub.name}}<small>Made by Somebody/Somehow/Maybe</small></h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">{{sub.briefDescription}}</div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a class="btn"><router-link :to="`./resources/${sub.id}`">Find Resources</router-link></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  name: "app",
  components: {
    Nav,
    TopBar
  },
  data: function() {
    return {
      subcategoriesData: []
    };
  },
  mounted: function() {
    console.log(this.$route.params.categoryId);
    fetch(`${process.env.VUE_APP_ROOT_API}/subcategory/${this.$route.params.categoryId}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.subcategoriesData = data;
        setTimeout(this.toggleDescription, 0);
      })
  },
  methods: {
      toggleDescription: function() {
        $(document).ready(function(){
          var zindex = 10;
          
          $("div.card").click(function(e){
            e.preventDefault();
        
            var isShowing = false;
        
            if ($(this).hasClass("show")) {
              isShowing = true
            }
        
            if ($("div.cards").hasClass("showing")) {
              // a card is already in view
              $("div.card.show")
                .removeClass("show");
        
              if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards")
                  .removeClass("showing");
              } else {
                // this card isn't showing - get in with it
                $(this)
                  .css({zIndex: zindex})
                  .addClass("show");
        
              }
        
              zindex++;
        
            } else {
              // no cards in view
              $("div.cards")
                .addClass("showing");
              $(this)
                .css({zIndex:zindex})
                .addClass("show");
        
              zindex++;
            }
            
          });
        });
      }
  }    
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);

body {
  background: #dce1df;
  color: #4f585e;
  font-family: 'Source Sans Pro', sans-serif;
  text-rendering: optimizeLegibility;
}

a {
  text-decoration: none;
  color: white;

}

a.btn {
  background: #0096a0;
  border-radius: 4px;
	box-shadow: 0 2px 0px 0 rgba(0,0,0,0.25);
  color: #ffffff;
  display: inline-block;
  padding: 6px 30px 8px;
  position: relative;
  text-decoration: none;
	transition: all 0.1s 0s ease-out;
}

.no-touch a.btn:hover {
  background: lighten(#0096a0, 2.5);
  box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-2px);
  transition: all 0.25s 0s ease-out;
}

.no-touch a.btn:active,
a.btn:active {
  background: darken(#0096a0, 2.5);
  box-shadow: 0 1px 0px 0 rgba(255,255,255,0.25);
  transform: translate3d(0,1px,0);
  transition: all 0.025s 0s ease-out;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

div.cards {
  margin: 2%;
  text-align: center;
}

div.card {
  background: #ffffff;
  display: inline-block;
  margin: 1em;
  max-width: 15em;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  z-index: 1;
  border: 0;
  border-radius: 0;

  img {
    max-width: 100%;
  }

  div.card-title {
    background: #ffffff;
    padding: 6px 15px 10px;
    position: relative;
    z-index: 0;
    
    a.toggle-info {
      border-radius: 32px;
      height: 32px;
      padding: 16px;
      position: absolute;
      right: 15px;
      top: 10px;
      width: 32px;
      
      span {
        background: #ffffff;
        display: block;
        height: 2px;
        position: absolute;
        top: 16px;
        transition: all 0.15s 0s ease-out;
        width: 12px;
      }
      
      span.left {
        right: 14px;
        transform: rotate(45deg);
      }
      span.right {
        left: 14px;
        transform: rotate(-45deg);
      }
    }
    
    h2 {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.05em;
      margin: 0;
      padding: 0;
      
      small {
        display: block;
        font-size: 8px;
        letter-spacing: -0.025em;
      }
    }
  }

  div.card-description {
    padding: 0 15px 10px;
    position: relative;
    font-size: 14px;
  }

  div.card-actions {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.075);
    padding: 10px 15px 20px;
    text-align: center;
  }
  
  div.card-flap {
    background: darken(#ffffff, 15);
    position: absolute;
    width: 100%;
    transform-origin: top;
    transform: rotateX(-83.5deg);
  }

  div.flap1 {
    transition: all 0.3s 0.3s ease-out;
    z-index: -1;
  }

  div.flap2 {
    transition: all 0.3s 0s ease-out;
    z-index: -2;
  }
  
}

div.cards.showing {
  div.card {
    cursor: pointer;
    opacity: 0.2;
    transform: scale(0.88);
  }
}

.no-touch  div.cards.showing {
  div.card:hover {
    opacity: 0.94;
    transform: scale(0.92);
  }
}

div.card.show {
  opacity: 1 !important;
  transform: scale(1) !important;

  div.card-title {
    a.toggle-info {
      background: #ff6666 !important;
      span {
        top: 15px;
      }
      span.left {
        right: 10px;
      }
      span.right {
        left: 10px;
      }
    }
  }
  div.card-flap {
    background: #ffffff;
    transform: rotateX(0deg);
  }
  div.flap1 {
    transition: all 0.3s 0s ease-out;
  }
  div.flap2 {
    transition: all 0.3s 0.2s ease-out;
  }
}
</style>
