const createFooter =()=>{
    let footer = document.querySelector('footer');
    footer.innerHTML=`
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">swearshirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>                   
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">swearshirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>                   
        </ul>
    </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
     Laboriosam praesentium cupiditate sed ratione earum nobis omnis qui dolore perspiciatis dolorem, 
    asperiores voluptate vitae fugit iure minima accusantium commodi, esse animi eos exercitationem cum quisquam explicabo magnam recusandae! 
    Debitis quaerat blanditiis quo odit, inventore suscipit perspiciatis minima aut neque optio modi necessitatibus facilis fugiat repellendus laborum unde eligendi quod aliquam et ea, 
    tempora rem sapiente! Error eveniet, similique, veritatis dignissimos ipsam animi ipsum autem tenetur odio beatae fuga! Veritatis quis dolore laudantium unde cupiditate esse nostrum, 
    rem quas inventore iure vel asperiores alias ullam natus vitae tenetur dicta sapiente nemo porro!
</p>
<p class="info">Email - clothingcollect123@gmail.com</p>
<p class="info">Telephone - 180 00 00 01,18 00 00 02</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & conditions</a>
        <a href="#" class="social-link">privacy policy</a>
    </div>
    <div>
        <a href="https://www.instagram.com" target="_blank"  class="social-link"><img src="img/instaimage.jpg" alt=""></a>
        <a href="https://www.facebook.com" target="_blank"  class="social-link"><img src="img/facebookimg.jpg" alt=""></a>
        <a href="https://www.twitter.com" target="_blank"  class="social-link"><img src="img/twitterimg.png" alt=""></a>
    </div>
</div>
<p class="footer-credit">Clothing, best apparels online store  </p>
    `;
}
createFooter();