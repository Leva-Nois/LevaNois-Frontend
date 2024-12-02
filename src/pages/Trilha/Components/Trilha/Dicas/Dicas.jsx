import React from "react";
import "./Dicas.css";
import Barralateral from "../../BarraLateral";

const Dicas = () => {
  return (
    <div className="barra-lateral"  >
         <Barralateral />
    <div className="dicas-container">
      <h1>Leva Dica</h1>
      <p>Fica ligado! Pega essas aulas de um pessoal top para você destravar no inglês.</p>
      <div className="dicas-section">
        <h2>Ótimos profissionais</h2>
        <div className="dicas-profiles">
          <div className="profile">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.googleusercontent.com%2FLZc5UDpqOpPrma4r5GdDM4pDYHspj4XZs5HimWfZ79gsVcMF_LMhkbWtArqpWV8CBdx92jNtWpg%3Ds900-c-k-c0x00ffffff-no-rj&f=1&nofb=1&ipt=be605d61afacbe687bd35a003c92db825d01aeb6ecd825252181f60992b006d9&ipo=images" alt="Luciana Sampaio" />
            <p>
              <a href="https://www.youtube.com/@Luciana.sampaio" target="_blank" rel="noopener noreferrer">
                Luciana Sampaio
              </a>
                <p>YouTube</p>
            </p>
          </div>
          <div className="profile">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.googleusercontent.com%2Ft3J4-nXe-dl2tmiHsL_HE-EwW2WVEZUbh1IlxeP0uWzyRlrzTNZs5fMONEjj8fE4Xpk5cwQZMN8%3Ds900-c-k-c0x00ffffff-no-rj&f=1&nofb=1&ipt=4e3c886554ac16c501cdf00f26542b7366a219e997fcd1ae47938f69947eae57&ipo=images" alt="Laís Gonçalves" />
            <p>
              <a href="https://www.youtube.com/@itsTeacherLais" target="_blank" rel="noopener noreferrer">
                Laís Gonçalves
              </a>
              <p>YouTube</p>   
            </p>
          </div>
          <div className="profile">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.googleusercontent.com%2F3TGViBdcT9k34AZdAYcDKRHGVRYd22P63U0OGpG1_RnOflDPZIqmETU1oUMcCiKJo3SYSOipiQ%3Ds900-c-k-c0x00ffffff-no-rj&f=1&nofb=1&ipt=1570f3d1c4ad02d65d9c2f91b20d188f079ecb42fb2d8a7c565390ead72084a3&ipo=images" alt="Professor Kenny" />
            <p>
              <a href="https://www.youtube.com/@PROFESSORKENNYOFICIAL" target="_blank" rel="noopener noreferrer">
                Professor Kenny
              </a>
              <p>YouTube</p>
            </p>
          </div>
        </div>
      </div>
      <div className="dicas-section">
        <h2>Tá no precinho</h2>
        <div className="dicas-links">
          <div className="link">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.stickpng.com%2Fimages%2F62a63a8403a870b920cbfd4a.png&f=1&nofb=1&ipt=213713ae462f02048a7a7a5dbf8351dbf0e49738227c9eb1d661b8bfc9e70014&ipo=images" alt="Khan Academy" />
            <p><a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">Khan Academy</a></p>
            <p>Preço: Gratuito</p>
          </div>
          <div className="link">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FD%2Fduolingo-logo-DB18C5E638-seeklogo.com.png&f=1&nofb=1&ipt=de179c3a8b990837a6e6eb85167d3abd35e54b44ba1980f5fd9f89e72e9ef239&ipo=images" alt="Duolingo" />
            <p><a href="https://www.duolingo.com/" target="_blank" rel="noopener noreferrer">Duolingo</a></p>
            <p>Preço: Gratuito</p>
          </div>
          <div className="link">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplay-lh.googleusercontent.com%2FJMEjv6SjaxMEAW4sn0dpCi2mBqWx-2pfw9-tP67IPuEx5ZxiRb8b266XERd-Cx7ynPs&f=1&nofb=1&ipt=47b41af4ab6909ee1c0386ccdf66c7125faf78ececc0bdb147e97181bec94383&ipo=images" alt="Kultivi" />
            <p><a href="https://www.kultivi.com/" target="_blank" rel="noopener noreferrer">Kultivi</a></p>
            <p>Preço: Gratuito</p>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Dicas;
