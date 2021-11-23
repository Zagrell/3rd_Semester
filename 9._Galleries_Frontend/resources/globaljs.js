const baseURL = "http://localhost:8080";


const navBar = document.getElementById("nav-bar");

navBar.innerHTML=`
<a href="../frontpage/index.html"><img class="logo" src="../resources/kajerfox.ico" alt="logo"></a>
    <a href="../artists/artists.html">
        Artists
    </a>
    <a href="../paintings/paintings.html">
        Paintings
    </a>
    <a href="../galleries/galleries.html">
        Galleries
    </a>
`;