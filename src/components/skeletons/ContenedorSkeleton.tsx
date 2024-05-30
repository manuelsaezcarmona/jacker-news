import styled, { keyframes } from 'styled-components';

const Resplandor = keyframes`
    to {
        background-position: right -40px 0;
    }
`;

interface ContenedorSkeletonProps {
  $minHeight?: number;
  $Width?: number;
}

export const ContenedorSkeleton = styled.div<ContenedorSkeletonProps>`
  background-color: #e2e5e7;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  background-size: 100px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  -webkit-animation: ${Resplandor} 1s ease infinite;
  animation: shine 1s ease infinite;
  min-height: ${(props) => props.$minHeight ?? 16}px;
  min-width: 50px;
  width: ${(props) => props.$Width ?? 100}%;
`;
