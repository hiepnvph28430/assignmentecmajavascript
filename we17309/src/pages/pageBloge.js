import { useEffect, useState } from "../lib";
const PageBlog = () => {

    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        fetch("http://localhost:3000/blogs")
            .then((response) => response.json())
            .then((data1) => {
                console.log(data1);
                setData(data1)
            });
        console.log(data)
    }, []);


    return data.map(item => (
        ` <div class="blog-card">
    <div class="blog-card-header">
        <img src="assets/imgs/img-1.jpg" class="blog-card-img"
            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
    </div>
    <div class="blog-card-body">
        <h5 class="blog-card-title">${item.title}</h5>

            <p class="blog-card-caption">
                <a href="#">By: Admin</a>
                <a href="#"><i class="ti-heart text-danger"></i> 234</a>
                <a href="#"><i class="ti-comment"></i> 123</a>
            </p>
            <p>${item.content}.</p>

            <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid
                    consequuntur repudiandae.</b></p>
            <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi,
                dolor blanditiis cupiditate harum nisi vero accusamus laudantium
                voluptatibus dolores quae obcaecati.</p>

            <a href="#" class="blog-card-link">Read more <i
                    class="ti-angle-double-right"></i></a>
    </div>
</div>`
    ))
}


export default PageBlog