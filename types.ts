export type SegmentTheme = 'green' | 'gold' | 'blue' | 'pop';

export type SlideType = 'script' | 'concept' | 'grammar' | 'answer-key';

export interface BaseSlide {
  id: string;
  segmentTitle: string;
  slideTitle: string;
  theme: SegmentTheme;
  type: SlideType;
}

export interface ScriptSlideData extends BaseSlide {
  type: 'script';
  visualAlt: string;
  headline: string;
  scriptContent: { speaker: string; text: string; action?: string }[];
}

export interface ConceptSlideData extends BaseSlide {
  type: 'concept';
  headline: string;
  concept: {
    title: string;
    explanation: string;
    formula: string[];
    example: { direct: string; reported: string };
  };
}

export interface GrammarExercise {
  pre: string;
  post: string;
  answer: string;
  options: string[];
}

export interface GrammarSlideData extends BaseSlide {
  type: 'grammar';
  headline: string;
  visualAlt: string;
  exerciseSet: {
    title: string;
    exercises: GrammarExercise[];
  };
}

export interface AnswerKeySlideData extends BaseSlide {
  type: 'answer-key';
  headline: string;
  solutions: { title: string; text: string }[];
}

export type SlideData = ScriptSlideData | ConceptSlideData | GrammarSlideData | AnswerKeySlideData;