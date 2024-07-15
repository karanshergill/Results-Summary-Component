import React from 'react';
import ReactionIcon from '../icons/ReactionIcon';
import MemoryIcon from '../icons/MemoryIcon';
import VerbalIcon from '../icons/VerbalIcon';
import VisualIcon from '../icons/VisualIcon';
import summaryData from '../data/data.json'
import * as Styled from '../styles/ResultComponentStyles';

const icons = {
  Reaction: ReactionIcon,
  Memory: MemoryIcon,
  Verbal: VerbalIcon,
  Visual: VisualIcon,
};

const colors = {
  Reaction: { bg: 'bg-Accent-LightRed/[0.07]', text: 'text-Accent-LightRed' },
  Memory: { bg: 'bg-Accent-OrageyYellow/[0.07]', text: 'text-Accent-OrageyYellow' },
  Verbal: { bg: 'bg-Accent-GreenTeal/[0.07]', text: 'text-Accent-GreenTeal' },
  Visual: { bg: 'bg-Accent-CobaltBlue/[0.07]', text: 'text-Accent-CobaltBlue' },
};

export const ResultComponent = () => {

  return (
    <Styled.Wrapper>
      <Styled.Container>

        <Styled.LeftSection>
          <Styled.LeftSectionTitle>Your Result</Styled.LeftSectionTitle>
          <Styled.ScoreContainer>
            <Styled.ScoreCircle>
              <Styled.TotalScore>76</Styled.TotalScore>
              <Styled.MaxScore>of 100</Styled.MaxScore>
            </Styled.ScoreCircle>
            <Styled.ScoreAttributes>
              <Styled.ScoreStatus>Great</Styled.ScoreStatus>
              <Styled.ScoreComment>You scored higher than 65% of the
                people who have taken these tests.
              </Styled.ScoreComment>
            </Styled.ScoreAttributes>
          </Styled.ScoreContainer>
        </Styled.LeftSection>

        <Styled.RightSection>
          <Styled.RightSectionTitle>Summary</Styled.RightSectionTitle>
          {summaryData.map((item, index) => {
            const SummaryIcon = icons[item.category];
            const color = colors[item.category];

            // if (!SummaryIcon || !color) {
            //   console.warn(`No matching icon or color for category: ${item.category}`);
            //   return null;
            // }

            return (
              <Styled.SummaryItem key={index} $bgColor={color.bg} $textColor={color.text}>
                <div className='flex'>
                  <SummaryIcon />
                  <Styled.SummaryCategory>{item.category}</Styled.SummaryCategory>
                </div>
                <div className='flex'>
                  <Styled.SummaryTotalScore>{item.score}</Styled.SummaryTotalScore>
                  <Styled.SummaryMaxScore>/ 100</Styled.SummaryMaxScore>
                </div>

              </Styled.SummaryItem>
            )
          })}
          <Styled.ContinueButton>Continue</Styled.ContinueButton>
        </Styled.RightSection>

      </Styled.Container>
    </Styled.Wrapper>
  )
}
