import NextImage from 'next/image';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
  solution?: string;
  imageUrl?: string;
  showSolution?: boolean;
}

export default function BasicCard({ title, description, solution, imageUrl, showSolution }: BasicCardProps) {
  return (
    <Card>
      {imageUrl && <NextImage src={imageUrl} width={108} height={80} alt={title} />}
      {imageUrl ? <CenterTitle>{title}</CenterTitle> : <Title>{title}</Title>}
      <Description>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </Description>
      {showSolution && solution && (
        <>
          <SolutionTitle>Solution</SolutionTitle>
          <SolutionDescription>
            <div dangerouslySetInnerHTML={{ __html: solution }}></div>
          </SolutionDescription>
        </>
      )}
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.5rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const CenterTitle = styled.div`
  font-weight: bold;
  text-align: center;
`;

const Description = styled.div`
  opacity: 0.8;
  text-align: left;
`;

const SolutionTitle = styled.div`
  font-weight: bold;
  color: rgb(var(--secondary));
`;

const SolutionDescription = styled.div`
  opacity: 0.9;
  text-align: left;
  color: rgb(var(--secondary));
`;
