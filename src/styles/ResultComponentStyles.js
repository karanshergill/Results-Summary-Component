import styled from "styled-components";

export const Wrapper = styled.section.attrs({
  className: 'h-screen flex justify-center items-center font-Hanken'
})``;

export const Container = styled.div.attrs({
  className: 'flex flex-col gap-4 md:flex-row border-2 border-black p-6'

})``;

// Left Section

export const LeftSection = styled.div.attrs({
  className: 'flex flex-col w-60 items-center rounded-2xl px-6 py-8 gap-6 bg-gradient-to-b from-BGG-LightSlateBlue to-BGG-RoyalBlue'
})``;

export const LeftSectionTitle = styled.h1.attrs({
  className: 'text-Neutral-LightLavender text-sm font-semibold'
})``;

export const ScoreContainer = styled.div.attrs({
  className: 'flex flex-col items-center gap-4'
})``;

export const ScoreCircle = styled.div.attrs({
  className: 'flex flex-col w-36 h-36 rounded-full justify-center items-center gap-1 font-semibold bg-gradient-to-br from-BG-VoiletBlue to-BG-PersianBlue'
})``;

export const TotalScore = styled.h2.attrs({
  className: 'text-Neutral-White text-5xl font-bold'
})``;

export const MaxScore = styled.p.attrs({
  className: 'text-Neutral-LightLavender text-xs'
})``;

export const ScoreAttributes = styled.div.attrs({
  className: 'flex flex-col gap-2 items-center px-3'
})``;

export const ScoreStatus = styled.h2.attrs({
  className: 'text-Neutral-White text-lg font-semibold'
})``;

export const ScoreComment = styled.p.attrs({
  className: 'text-Neutral-LightLavender text-xs text-center'
})``;


// Right Section

export const RightSection = styled.div.attrs({
  className: 'rounded-r-2xl bg-Neutral-White py-4 px-3 w-60 flex flex-col justify-between'
})``;

export const RightSectionTitle = styled.h1.attrs({
  className: 'text-DarkGrayBlue text-lg font-bold'
})``;

export const SummaryItem = styled.div.attrs(({$bgColor, $textColor}) => ({
  className: `flex rounded-md items-center justify-between px-4 text-sm font-semibold py-2 ${$bgColor} ${$textColor}`
}))``;

export const SummaryCategory = styled.h3.attrs({
  className: ''
})``;

export const SummaryTotalScore = styled.h3.attrs({
  className: 'text-Neutral-DarkGrayBlue'
})``;

export const SummaryMaxScore = styled.p.attrs({
  className: 'text-Neutral-LightLavender'
})``;

export const ContinueButton = styled.div.attrs({
  className: 'bg-Neutral-DarkGrayBlue rounded-full py-3 text-center text-Neutral-PaleBlue text-xs hover:bg-gradient-to-t from-BGG-LightSlateBlue to-BGG-RoyalBlue'
})``;