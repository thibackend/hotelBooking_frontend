import React from "react";
import "./about.css";
import Hotel from "./image/HotelTalent.jpg";
import aSon from "./image/aSon.jpg";
import aTien from "./image/aTien.jpg";
import aThang from "./image/aThang.jpg";
import aThi2 from "./image/AThi2.jpg";
import coreValue from "./image/coreValue.png";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";

const AboutUs = () => {
  const members = [
    {
      id: 1,
      name: "A Sơn",
      position: "CEO",
      image: aSon,
    },
    {
      id: 2,
      name: "A Tiến",
      position: "CTO",
      image: aTien,
    },
    {
      id: 3,
      name: "A Thi",
      position: "CTO",
      image: aThi2,
    },
    {
      id: 4,
      name: "A Thắng",
      position: "CTO",
      image: aThang,
    },
  ];

  const services = [
    "Phòng nghỉ sang trọng",
    "Nhà hàng đa dạng",
    "Spa và dịch vụ làm đẹp",
    "Trung tâm hội nghị và sự kiện",
    // Thêm các dịch vụ khác
  ];

  return (
    <div className="about-container container-fluid">
      <div
        className="row"
        style={{
          height: "280px",
        }}
      >
        <div
          style={{
            backgroundImage: `url("https://www.publichotels.com/content/slides/Popular-1600x1000-NEW-V2.jpg")`,
          }}
        >
          <h1 className="centered-text">Greating</h1>
          <div style={{ color: "white", textAlign: "center" }}>
            Chúng tôi giúp cho các khách hàng có được những trải nghiệm và{" "}
            <br />
            những khoảnh khắc tuyệt vời tại khách sạn của chúng tôi.
          </div>
        </div>
      </div>
      <div className="row container">
        <div className="col-md-6">
          {" "}
          <br />
          <br />
          <br />
          <hr />
          <h1 className="about-heading">Về chúng tôi</h1>
          <div className="content">
            <div style={{ textAlign: "center" }}>
              Chào mừng bạn đến với 3TS Hotel, Tại khách sạn của chúng tôi,
              chúng tôi tin rằng việc tạo ra một ngôi nhà xa nhà cho khách hàng
              là rất quan trọng. Chúng tôi hiểu rằng việc đi du lịch có thể thú
              vị nhưng cũng đầy thách thức, và sứ mệnh của chúng tôi là cung cấp
              cho bạn một nơi nghỉ ngơi thoải mái và chào đón, nơi bạn có thể
              thư giãn và tìm lại sức sống. <br />
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-20">
          <img style={{ borderRadius: "15px" }} src={Hotel} alt="" />
          <br />
        </div>
      </div>
      <hr />
      <h1 className="section-heading">Ngày thành lập</h1> <br />
      <div className="founded">
        <b>Hotel 3TS</b> được thành lập vào ngày 1 tháng 6 năm 2023. với 4 thành
        viên chính. Với sự đóng góp và nỗ lực không ngừng nghĩ thì chúng tôi đã
        phát triển trang web lên tầm quốc tế, được sự ủng hộ của rất nhiều khách
        nước ngoài những phản hồi và đánh giá của họ cho thấy họ rất hài lòng về
        dịch vụ của hotel chúng tôi.
      </div>
      <br />
      <hr />
      <h3 className="section-heading">Thành viên thành lập</h3> <br />
      <div className="members-container d-flex justify-content-evenly">
        {members.map((member) => (
          <div key={member.id} className="member-item">
            <img className="member-image center" src={member.image} />
            <h4 className="member-name center pt-3">{member.name}</h4>
            <div className="d-flex justify-content-evenly">
              <h3>
                {" "}
                <BiLogoInstagramAlt />{" "}
              </h3>
              <h3>
                {" "}
                <BiLogoTwitter />{" "}
              </h3>
              <h3>
                {" "}
                <BiLogoFacebookCircle />{" "}
              </h3>
            </div>
            <p className="member-position center">{member.position}</p>
          </div>
        ))}
      </div>
      <hr />
      <h3 className="section-heading">Sứ mệnh</h3>
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="su_menh">
            Sứ mệnh của chúng tôi là mang đến cho khách hàng những trải nghiệm
            lưu trú đẳng cấp và dịch vụ chất lượng cao với sự chăm sóc tận tâm
            và sự hài lòng tối đa. Chúng tôi cam kết tạo ra một môi trường
            chaleureux và đáng yêu, nơi mọi người cảm thấy hoan nghênh, thoải
            mái và được chăm sóc tận tâm. <br />
            Đối với chúng tôi, sứ mệnh không chỉ đơn thuần là cung cấp chỗ ở
            thoải mái cho khách hàng. Chúng tôi hy vọng mỗi khách hàng khi đến
            với chúng tôi sẽ trải nghiệm một kỳ nghỉ đáng nhớ và mang lại những
            kỷ niệm vô giá.
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <br />
      <hr />
      <h3 className="section-heading">Giá trị cốt lõi</h3> <br />
      <div className="row justify-content-center">
        <div className="col-md-2"></div>
        <div className="col-md-3">
          <h3>Khát vọng</h3>
          <div>
            Luôn đặt những thách thức và hoàn thành chúng với 110% cam kết
          </div>{" "}
          <br />
          <h3>Cống hiến</h3>
          <div>
            Luôn làm việc chăm chỉ và trách nhiệm để có kết quả tốt nhất
          </div>{" "}
          <br />
          <h3>Sự đổi mới</h3>
          <div>
            Không ngừng đổi mới, sáng tạo cách làm mới, cách nghĩ khác để đạt
            hiệu quả cao nhất
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img className="coreValue" src={coreValue} alt="Core Value" />
        </div>
        <div className="col-md-3">
          <h3 className="pt-2">Liên tục tự cải thiện</h3>
          <div>
            Luôn có tinh thần tự học hỏi và tiến bộ và sẵn sàng đón nhận những
            cơ hội và sứ mệnh sắp tới
          </div>{" "}
          <br />
          <h3>Sự cởi mở</h3>
          <div>
            Luôn sẵn sàng chia sẻ kiến thức và cùng đồng hành vì sự phát triển
            chung của công ty
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <h3 className="section-heading">Dịch vụ</h3>
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
