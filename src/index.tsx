import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type FeeClassification = {
  name: string;
  description: string;
  unitPrice: number;
  numOfPeople: number;
  totalPrice: number;
};

type DetailProps = {
  classification: FeeClassification;
};

class Detail extends React.Component<DetailProps, {}> {
  render() {
    return (
      <div>
        <div className="classification-name">
          {this.props.classification.name}
        </div>
        <div className="description">
          {this.props.classification.description}
        </div>
        <div className="unit-price">
          {this.props.classification.unitPrice}円
        </div>
        <div className="num-people">
          <select value={this.props.classification.numOfPeople}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span>名</span>
        </div>
      </div>
    );
  }
}

class Summary extends React.Component {
  render() {
    return (
      <div>
        <div className="party">
          <input type="text" className="party" value="0" />
          <span>名様</span>
        </div>
        <div className="total-amount">
          <span>合計</span>
          <input type="text" className="total-amount" value="0" />
          <span>円</span>
        </div>
      </div>
    );
  }
}

class AdmissionFeeCalculator extends React.Component {
  private details: DetailProps[] = [
    {
      classification: {
        name: '大人',
        description: '',
        unitPrice: 1000,
        numOfPeople: 0,
        totalPrice: 0,
      },
    },
    {
      classification: {
        name: '学生',
        description: '中学生・高校生',
        unitPrice: 700,
        numOfPeople: 0,
        totalPrice: 0,
      },
    },
    {
      classification: {
        name: '子ども',
        description: '小学生',
        unitPrice: 300,
        numOfPeople: 0,
        totalPrice: 0,
      },
    },
    {
      classification: {
        name: '幼児',
        description: '未就学',
        unitPrice: 0,
        numOfPeople: 0,
        totalPrice: 0,
      },
    },
  ];

  render() {
    const detailJsx = this.details.map((fc, idx) => {
      return <Detail key={idx.toString()} classification={fc.classification} />;
    });
    return (
      <>
        {detailJsx}
        <Summary />
      </>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="main">
      <AdmissionFeeCalculator />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
