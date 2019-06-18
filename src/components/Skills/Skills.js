import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import './Skills.scss';
import { dataSkills } from '../../utils/skillsData';

const colors = ['#BD10E0', '#B8E986', '#50E3C2', '#E86363'];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#E86363">{textAnchor}</text> */}
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#fff">
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  );
};

export default class Skills extends PureComponent {
  state = {
    activeIndex: 0
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <section id="skills">
        <div className="skills__front-end">
          <h3 className="skills__title">
            <span className="title__lines">Front-End</span>
          </h3>
          {/* <PieChart width={730} height={250}>
            <Pie data={dataSkills.front} cx="50%" cy="50%" outerRadius={80} label>
              {dataSkills.front.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} label={{ value: entry, position: 'inside' }} />
              ))}
            </Pie>
          </PieChart> */}
          <PieChart width={300} height={300}>
            <Pie activeIndex={this.state.activeIndex} activeShape={renderActiveShape} data={dataSkills.front} cy={200} innerRadius={40} outerRadius={60} fill="#E86363" dataKey="value" onMouseEnter={this.onPieEnter} />
          </PieChart>
        </div>
        <div className="skills__design">
          <h3 className="skills__title">
            <span className="title__lines">Design</span>
          </h3>
          <PieChart width={300} height={300}>
            <Pie activeIndex={this.state.activeIndex} activeShape={renderActiveShape} data={dataSkills.design} cx={200} cy={200} innerRadius={60} outerRadius={80} fill="#E86363" dataKey="value" onMouseEnter={this.onPieEnter} />
          </PieChart>
        </div>
        <div className="skills__back-end">
          <h3 className="skills__title">
            <span className="title__lines">Back-End</span>
          </h3>
          <PieChart width={300} height={300}>
            <Pie activeIndex={this.state.activeIndex} activeShape={renderActiveShape} data={dataSkills.back} cx={200} cy={200} innerRadius={60} outerRadius={80} fill="#E86363" dataKey="value" onMouseEnter={this.onPieEnter} />
          </PieChart>
        </div>
        <div className="skills__tools">
          <h3 className="skills__title">
            <span className="title__lines">Tools</span>
          </h3>
          <PieChart width={300} height={300}>
            <Pie activeIndex={this.state.activeIndex} activeShape={renderActiveShape} data={dataSkills.tools} cx={200} cy={200} innerRadius={60} outerRadius={80} fill="#E86363" dataKey="value" onMouseEnter={this.onPieEnter} />
          </PieChart>
        </div>
      </section>
    );
  }
}
