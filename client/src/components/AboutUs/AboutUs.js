import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row p-lr-50">
          <div className="col-12 text-center ">
            <h2 className="title-underline mb-4">
              About<span className="t-orange">&nbsp;Us</span>
            </h2>
          </div>
        </div>
        <div className="about_container d-flex">
          <div className="row">
            <div className="col-lg-8 col-12">
              <p className="p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quaerat debitis, itaque laboriosam rerum porro! Labore
                placeat soluta iste molestiae, esse maiores illum! Quos minima
                nulla commodi soluta sequi deleniti tempora, esse excepturi
                tenetur repudiandae earum totam accusamus est incidunt suscipit
                sint expedita praesentium animi eos autem. Id voluptate nulla
                ratione error, atque corporis non consectetur, maxime incidunt
                minima autem omnis reprehenderit fuga quibusdam voluptas,
                debitis minus aspernatur nisi assumenda veritatis asperiores.
                Nobis officiis ex at est ad laboriosam debitis neque. Doloribus
                quidem ipsa quam quas alias pariatur architecto quod deserunt in
                quae voluptates fugiat debitis accusamus quasi, impedit illum?
              </p>
            </div>
            <div className="col-lg-4 col-12">
              <div className="image_about_container text-center p-5">
                <img
                  src="https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg"
                  alt="name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
