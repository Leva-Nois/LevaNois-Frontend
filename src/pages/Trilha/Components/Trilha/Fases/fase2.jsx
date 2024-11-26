import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fase2.css';

const Fase2 = () => {
  const [screen, setScreen] = useState('welcome');
  const [profession, setProfession] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [familyMembers, setFamilyMembers] = useState([]);
  const [currentFamilyMember, setCurrentFamilyMember] = useState({
    name: '',
    relation: '',
    profession: '',
    income: '',
  });
  const navigate = useNavigate();

  const handleNextClick = () => {
    setScreen('salary');
  };

  const handleSalaryClick = (salaryRange) => {
    console.log(`Salário selecionado: ${salaryRange}`);
    setScreen('work');
  };

  const handleWorkClick = (answer) => {
    console.log(`Trabalha: ${answer}`);
    if (answer === 'Sim') {
      setScreen('workDetails');
    } else if (answer === 'Não') {
      setScreen('familyDetails');
    }
  };

  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, currentFamilyMember]);
    setCurrentFamilyMember({
      name: '',
      relation: '',
      profession: '',
      income: '',
    });
  };

  const handleSubmitFamilyDetails = () => {
    console.log('Family Members:', familyMembers);
    setScreen('completed');
  };

  const handleSubmit = () => {
    console.log(`Profissão: ${profession}, Cargo: ${position}, Salário: ${salary}`);
    setScreen('completed');
  };

  const handleNextLevel = () => {
    navigate('/trilha/Fases/fase3');
  };

  return (
    <div className="fase-container">
      {screen === 'welcome' && (
        <div className="welcome-screen">
          <p>Bem Vindo ao nível 2! Neste nível vamos entender melhor sobre sua renda</p>
          <button className="next-button" onClick={handleNextClick}>
            Próximo
          </button>
        </div>
      )}

      {screen === 'salary' && (
        <div className="salary-screen">
          <p>Nos informe seu salário:</p>
          <div className="button-group">
            <button className="salary-button" onClick={() => handleSalaryClick('1 a 2 salários mínimos')}>
              1 a 2 salários mínimos
            </button>
            <button className="salary-button" onClick={() => handleSalaryClick('3 a 4 salários mínimos')}>
              3 a 4 salários mínimos
            </button>
            <button className="salary-button" onClick={() => handleSalaryClick('5 salários mínimos')}>
              5 salários mínimos
            </button>
          </div>
        </div>
      )}

      {screen === 'work' && (
        <div className="work-screen">
          <p>Você trabalha?</p>
          <div className="button-group">
            <button className="work-button" onClick={() => handleWorkClick('Sim')}>
              Sim
            </button>
            <button className="work-button" onClick={() => handleWorkClick('Não')}>
              Não
            </button>
          </div>
        </div>
      )}

      {screen === 'workDetails' && (
        <div className="work-details-screen">
          <p>Você trabalha com o que?</p>
          <div className="input-group">
            <label htmlFor="profession">Profissão</label>
            <input
              type="text"
              id="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="position">Cargo</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="salary">Salário</label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      )}

      {screen === 'familyDetails' && (
        <div className="family-details-screen">
          <p>Informe quem da sua casa trabalha, com o que trabalha, quanto ganha.</p>
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={currentFamilyMember.name}
              onChange={(e) => setCurrentFamilyMember({ ...currentFamilyMember, name: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="relation">Grau de parentesco</label>
            <input
              type="text"
              id="relation"
              value={currentFamilyMember.relation}
              onChange={(e) => setCurrentFamilyMember({ ...currentFamilyMember, relation: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="profession">Profissão</label>
            <input
              type="text"
              id="profession"
              value={currentFamilyMember.profession}
              onChange={(e) => setCurrentFamilyMember({ ...currentFamilyMember, profession: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="income">Quanto ganha por mês</label>
            <input
              type="text"
              id="income"
              value={currentFamilyMember.income}
              onChange={(e) => setCurrentFamilyMember({ ...currentFamilyMember, income: e.target.value })}
            />
          </div>
          <button className="add-button" onClick={handleAddFamilyMember}>
            Adicionar
          </button>
          <button className="continue-button" onClick={handleSubmitFamilyDetails}>
            Continuar
          </button>
        </div>
      )}

      {screen === 'completed' && (
        <div className="completed-screen">
          <p>
            Parabéns! Você conseguiu concluir o nível 2, graças a isso temos as
            informações que precisávamos quanto à sua renda. Clique no botão "Próximo nível"
            para avançar para o nível 3.
          </p>
          <button className="next-level-button" onClick={handleNextLevel}>
            Próximo nível
          </button>
        </div>
      )}
    </div>
  );
};

export default Fase2;
