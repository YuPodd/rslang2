import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Row, Col, Layout} from 'antd';
const Content = Layout.Content;
const learnedPerDay = [
    {name: '26.03',words: 25},
    {name: '27.03',words: 15},
    {name: '28.03',words: 21},
    {name: '29.03',words: 9},
    {name: '30.03',words: 13},
    {name: '26.03',words: 25},
    {name: '27.03',words: 15},
    {name: '28.03',words: 21},
    {name: '29.03',words: 9},
    {name: '30.03',words: 13},
    {name: '26.03',words: 25},
    {name: '27.03',words: 15},
    {name: '28.03',words: 21},
    {name: '29.03',words: 9},
    {name: '30.03',words: 13},
    {name: '26.03',words: 25},
    {name: '27.03',words: 15},
    {name: '28.03',words: 21},
    {name: '29.03',words: 9},
    {name: '30.03',words: 13},
    {name: '26.03',words: 25},
    {name: '27.03',words: 15},
    {name: '28.03',words: 21},
    {name: '29.03',words: 9},
    {name: '30.03',words: 13},

 
  ];
  const learnedWords = [
    {name: '26.03',words: 10},
    {name: '27.03',words: 30},
    {name: '28.03',words: 39},
    {name: '29.03',words: 44},
    {name: '30.03',words: 61},
    {name: '30.03',words: 71},
    {name: '30.03',words: 91},
    {name: '30.03',words: 100},
    {name: '30.03',words: 111},
    {name: '30.03',words: 131},
    
 
  ];
  
  export default function StatisticPage() {
    return (
      <Content>
      <Row gutter={[48, 48]}>
      <Col xs={{span:24, offset:0}} sm={{span: 11, offset: 1}} lg={{ span: 7, offset: 1 }}>
      <ResponsiveContainer width="100%" height={200}>
            <BarChart className="statistic_page" data={learnedPerDay}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="words" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
            Изученные слова по дням
      </Col>
      </Row>
      <Row gutter={[48, 48]}>
        <Col xs={{span:24, offset:0}} sm={{span: 11, offset: 1}} lg={{ span: 7, offset: 1 }}>
        <ResponsiveContainer title=""width="100%" height={200}>
        <LineChart className="statistic_page"  data={learnedWords}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="words" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer>
      Изученные слова за все время
      </Col>
    </Row>
    </Content>
    );
  }
