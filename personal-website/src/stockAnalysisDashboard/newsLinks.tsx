import styled from "styled-components";
import { PrimaryColor } from "./stockAnalysisDashboard";

type NewsItem = {
  title: string;
  link: string;
};

type NewsLinksProps = {
  news: NewsItem[];
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 12px;
  margin-bottom: 6px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 150px; 
  overflow-y: auto;     
  padding-right: 4px;  
`;

const NewsLink = styled.a`
  color: ${PrimaryColor};
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
   
  &:hover {
    text-decoration: underline;
  }     
`;


function NewsLinks({ news }: NewsLinksProps) {
  if (!news || news.length === 0) return null;
  return (
    <Wrapper>
        <Title>In The News</Title>
        <NewsContainer>
            {news.map((item, index) => (
                <NewsLink
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {item.title}
                </NewsLink>
            ))}
        </NewsContainer>
    </Wrapper>
  );
}

export default NewsLinks;
