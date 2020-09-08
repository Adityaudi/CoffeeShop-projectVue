<template>
    <div class="app">
       
         <div class="product-list" >
          <div>
            <b-card
              :img-src= "images"
              :title= "names"
              img-alt="menus-image"
              id="list" >
              <b-card-text>
                <h5> {{ price }} </h5>
              </b-card-text>
            </b-card>
          </div>
      </div> 
    </div>
</template>

<script>
export default {
  name : 'home',
  props : {
      images : {
          type: String,
          required: true,
      },
      names :  {
          type: String,
          required: true,
      },
      price : {
          type: String,
          required: true,
      },
      category : {
          type: String,
          require: true,
      }
  }
}
</script>

<style>
.product-list {
   display: flex;
   justify-content: space-evenly;
   flex-wrap: nowrap;
    margin :3em 15px 0px 30px;
   cursor: pointer;
   border-top: 8px solid #007BFF;
   border-radius: 20px;
 }
 #list {
   width: 15em;
   border-style: none;
 }
 #list:hover {
   transform: scale(1.1);
   border: 4px solid #007BFF;
 }
</style>