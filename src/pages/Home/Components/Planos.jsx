// src/pages/Home/Planos.jsx
import React from 'react';
import './Planos.css';

const Planos = () => {
  const plans = [
    { 
      type: "Mensal", 
      price: "R$ 29,90", 
      benefits: [
        "Acesso à plataforma e a todos os guias práticos e recursos de planejamento.",
        "Acesso ao chat",
        "Suporte básico"
      ], 
      color: "#FE2B5C",
      isFreeFirstMonth: true // Apenas para o plano mensal
    },
    { 
      type: "Semestral", 
      price: "R$ 149,90", 
      benefits: [
        "Tudo do plano mensal",
        "Suporte dedicado por meio de chat ao vivo e e-mail",
        "Acesso a webinars exclusivos e sessões de orientação para planejamento de intercâmbio",
        "Acesso a materiais e recursos exclusivos para auxílio em bolsas de estudo"
      ], 
      color: "#FE8401"
    },
    { 
      type: "Anual", 
      price: "R$ 299,90", 
      benefits: [
        "Tudo do plano semestral",
        "Acesso prioritário a novos recursos, cursos e oportunidades de intercâmbio",
        "Acesso a sessões de coaching individual para ajudar no processo de aplicação e organização de intercâmbio",
        "Desconto em parcerias de intercâmbio e bolsas de estudo* (sujeito a disponibilidade)"
      ], 
      color: "#04066F",
      destaque: true // Marca este como recomendado
    },
  ];

  return (
    <section className="planos">
      <h2>Escolha seu Plano</h2>
      <div className="planos-container">
        {plans.map((plan, index) => (
          <div 
          key={index} 
          className="plano-card" 
          style={{ backgroundColor: plan.color }}
        >
          <h3 className="plano-tipo">{plan.type}</h3>
          {plan.destaque && <span className="plano-recomendado">Mais Recomendado</span>}
          <ul className="plano-beneficios">
            {plan.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
          </ul>
          <div className="plano-footer">
            <p className="plano-preco">
              {plan.isFreeFirstMonth && (
                <>
                  <s>{plan.price}</s> <span>Primeiro mês grátis!</span>
                </>
              )}
              {!plan.isFreeFirstMonth && plan.price}
            </p>
            <button className="plano-botao">Comece!</button>
          </div>
        </div>        
        ))}
      </div>
    </section>
  );
};

export default Planos;
