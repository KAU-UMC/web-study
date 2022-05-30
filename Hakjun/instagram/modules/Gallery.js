const Gallery = () => `
    <input type="file" name="photo" id="addPhotoInput">
    <label for="addPhotoInput">
        <i class="add-photo fas fa-plus-square"></i>
    </label>
    <div class="gallery-nav"></div>
    <section class="gallery">
        <a href="#" class="item">
            <img src="https://images.pexels.com/photos/11369918/pexels-photo-11369918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img1">
        </a>
        <a href="#" class="item">
            <img src="gimg2.jpeg" alt="">
        </a>
        <a href="#" class="item">
            <img src="gimg3.jpeg" alt="">
        </a>
        <a href="#" class="item">
            <img src="gimg4.webp" alt="">
        </a>
        <a href="#" class="item">
            <img src="../instapictures/gimg5.webp" alt="">
        </a>
        <a href="#" class="item">
            <img src="../instapictures/gimg6.jpeg" alt="">
        </a>
    </section>

`
export default Gallery