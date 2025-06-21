import React from "react";
import styled from "styled-components";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4.jsx";
import Component5  from "./Component5.jsx"
import Component6  from "./Component6.jsx"
import Article from "../../components/Home/Article.jsx";


const Dashboarduser = () => {
  return (
    <>
    <Container>
      <MainBox>
        <Header>
          <LeftHeader>
            <span>الوقت المتبقي:</span>
            <span>2023-12-31</span>
          </LeftHeader>
          <RightHeader>الواجبات</RightHeader>
        </Header>
        
        <ProgressContainer>
          <ProgressCircle>
            <ProgressPercentage>75%</ProgressPercentage>
          </ProgressCircle>
        </ProgressContainer>
        
        <Footer>
          <LeftFooter>
            <span>متابعة التقدم</span>
            <Arrow>→</Arrow>
          </LeftFooter>
          <RightFooter>
            <Link>قائمة الواجبات</Link>
          </RightFooter>
        </Footer>
      </MainBox>
      
      <SideBox>
        <TestTitle>الاختبارات</TestTitle>
        <TestResults>نتائج الاختبارات</TestResults>
        
        <HorizontalChartContainer>
          <ChartBarWrapper>
            <ChartBar style={{ width: '41.46px', background: '#FF718B' }} />
            <ChartLabel>مرفوض</ChartLabel>
          </ChartBarWrapper>
          <ChartBarWrapper>
            <ChartBar style={{ width: '95px', background: '#FFEB3A' }} />
            <ChartLabel>متوسط</ChartLabel>
          </ChartBarWrapper>
          <ChartBarWrapper>
            <ChartBar style={{ width: '282.9px', background: '#7FE47E' }} />
            <ChartLabel>جيد</ChartLabel>
          </ChartBarWrapper>
        </HorizontalChartContainer>
        
        <IconsContainer>
          <Icon>
            <FaceIcon style={{ color: '#FF718B' }}>☹️</FaceIcon>
            <span>مرفوض</span>
          </Icon>
          <Icon>
            <FaceIcon style={{ color: '#FFEB3A' }}>😐</FaceIcon>
            <span>متوسط</span>
          </Icon>
          <Icon>
            <FaceIcon style={{ color: '#7FE47E' }}>😊</FaceIcon>
            <span>جيد</span>
          </Icon>
        </IconsContainer>
      </SideBox>
      
    </Container>
    <Component2 />
    <Component3 />
    <Component4 />
    <Component5 />
    <Component6 />
   
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  direction: rtl;
  font-family: Tajawal;
  padding: 15px;
  gap: 15px;
  width: calc(100% - 240px);
`;

const MainBox = styled.div`
  flex: 2;
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 300px;
`;

const SideBox = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 300px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const LeftHeader = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
`;

const RightHeader = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

const ProgressCircle = styled.div`
  width: 180px;
  height: 160px;
  border: 20px solid #4A3AFF;
  border-bottom-color: #E5EAFC;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  position: relative;
`;

const ProgressPercentage = styled.div`
  font-size: 24px;
  font-weight: bold;
  transform: rotate(-90deg);
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 14px;
`;

const LeftFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const RightFooter = styled.div``;

const Link = styled.span`
  color: gray;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

const Arrow = styled.span`
  font-size: 14px;
`;

const TestTitle = styled.div`
  font-family: Tajawal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #818181;
  margin-bottom: 8px;
`;

const TestResults = styled.div`
  font-family: Tajawal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const HorizontalChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 100px;
  margin-bottom: 15px;
  direction: ltr;
`;

const ChartBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ChartBar = styled.div`
  height: 30px;
  border-radius: 8px;
  min-width: 10px;
`;

const ChartLabel = styled.span`
  font-size: 12px;
  color: #333;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const FaceIcon = styled.div`
  font-size: 18px;
  margin-bottom: 3px;
`;

export default Dashboarduser;