<template>

  <nav>
    <!-- Navbar html -->
    <div class="navbar">
            <div class="icon">
                <h2 class="logo">W.Tech.</h2>
            </div>

            <div class="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">COURSE MATERIALS</a></li>
                    <li><a href="#">ASSESSMENT</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </div>

            <div class="search">
         <input class="srch" type="search" name="" placeholder="Type To Find">
                <a href="#"> <button class="btn">Find</button></a>
            </div>
        </div>
  </nav>
</template>
<script>
export default {
  name: 'AppNavbar', // Change to a multi-word component name
};
</script>
<style>
/* Component styles go here */
.navbar{
    width: 100%;
    height: 75px;
    margin: auto;
}

.icon{
    width: 200px;
    float: left;
    height: 70px;
}

.logo{
    color: #fc8d1e;
    font-size: 20px;
    font-family: Cambria;
    padding-left: 50px;
    float: left;
    padding-top: 10px;
    margin-top: 5px
}
.menu{
    width: 600px;
    float: left;
    height: 70px;
}
ul{
    float:left;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul li{
    list-style: none;
    margin-left: 30px;
    margin-top: 27px;
    font-size: 14px;
}

ul li a{
    text-decoration: none;
    color: white;
    font-family: Arial;
    font-weight: bold;
    transition: 0.4s ease-in-out;
}

ul li a:hover{
    color: #ff7200;
}
.search{
    width: 330px;
    float: left;
    margin-left: 20px;
}
.srch{
    font-family: 'Times New Roman';
    width: 150px;
    height: 30px;
    background: transparent;
    border:  1px solid #ff7200;
    margin-top: 20px;
    color: white;
    border-right: none;
    font-size: 16px;
    float: left;
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.btn{
    width: 80px;
    height: 30px;
    background: #ff7200;
    border: 2px solid #ff7200;
    margin-top: 20px;
    color: white;
    font-size: 15px;
    border-bottom-right-radius: 5px;
    transition: 0.2s ease;
    cursor: pointer;
}
.btn:hover{
    color:#000;
}
.btn:focus{
    outline:none;
}
.srch:focus{
    outline:none;
}


</style>

