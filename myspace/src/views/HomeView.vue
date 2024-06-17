<template>
   <ContentBase>
    首页
    <div class="card-body">
        <div class="row">
            
            <div class="fs-3"><img class="img-fluid" :src="$store.state.user.photo" alt="">                   您好 {{$store.state.user.username}}</div> 
        </div>
      </div>
   </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';

export default{
    name: 'HomeView',
    components: {
    ContentBase,
  },
}
</script>
<style scoped>
img{
  border-radius: 50%;
  width:12%;
}
</style>