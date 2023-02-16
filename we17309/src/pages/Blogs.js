import { useEffect, useState } from "../lib"
import PageBlog from "./pageBloge";
import pageBloge from "./pageBloge";
const [data, setData] = useState([]);

// useEffect(() => {
//     fetch("http://localhost:3000/blogs")
//         .then((response) => response.json())
//         .then((data) => setData(data));
// }, []);


const Blogs = () => {

    return ` <section class="section" id="blog">
    <!-- container -->
    <div class="container text-center">
        <p class="section-subtitle">Recent Posts?</p>
        <h6 class="section-title mb-6">Blog</h6>
        <!-- blog-wrapper -->

      ${PageBlog()}

        <!-- blog-wrapper -->
        <div class="blog-card">
            <div class="blog-card-header">
                <img src="assets/imgs/img-2.jpg" class="blog-card-img"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
            </div>
            <div class="blog-card-body">
                <h5 class="blog-card-title">Explicabo illo</h6>

                    <p class="blog-card-caption">
                        <a href="#">By: Admin</a>
                        <a href="#"><i class="ti-heart text-danger"></i> 456</a>
                        <a href="#"><i class="ti-comment"></i> 264</a>
                    </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                        excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur
                        voluptas, esse doloribus. Perferendis porro quisquam vitae
                        exercitationem aliquid, minus eos laborum repudiandae, cumque debitis
                        iusto omnis praesentium? Laborum placeat sit adipisci illum tempore
                        maxime, esse qui quae? Molestias excepturi corporis similique doloribus.
                        Esse vitae earum architecto nulla non dolores illum at perspiciatis
                        quod, et deleniti cupiditate reiciendis harum facere, delectus eum
                        commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                    <a href="#" class="blog-card-link">Read more <i
                            class="ti-angle-double-right"></i></a>
            </div>
        </div><!-- end of blog wrapper -->

    </div><!-- end of container -->
</section>
`
}

export default Blogs