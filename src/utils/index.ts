import { Breadcrumb, QuizIndex } from "../types";

/**
 * @name generateBreadcrumbs
 * @description Based on the current page, get the path to this page
 */
const generateBreadcrumbs = (page: string, indexCarousel: QuizIndex) => {
  const links: Breadcrumb[] = [{ anchor: 'home', title: 'Home' }];

  switch (page) {
    case 'about-author':
      links.push({ anchor: page, title: 'About the Author' });
      break;

    case 'mission':
      links.push({ anchor: page, title: 'Mission' });
      break;

    case 'phonemes':
      links.push({ anchor: page, title: 'Phonemes' });
      break;

    case 'vowels':
      links.push({ anchor: 'phonemes', title: 'Phonemes' });
      links.push({ anchor: page, title: 'Vowels' });
      break;

    case 'diphthongs':
      links.push({ anchor: 'phonemes', title: 'Phonemes' });
      links.push({ anchor: page, title: 'Diphthongs' });
      break;

    case 'consonants':
      links.push({ anchor: 'phonemes', title: 'Phonemes' });
      links.push({ anchor: page, title: 'Consonants' });
      break;

    case 'stress':
      links.push({ anchor: page, title: 'Stress' });
      break;

    case 'intonation':
      links.push({ anchor: page, title: 'Intonation' });
      break;

    case 'falling':
      links.push({ anchor: 'intonation', title: 'Intonation' });
      links.push({ anchor: page, title: 'Falling' });
      break;

    case 'rising':
      links.push({ anchor: 'intonation', title: 'Intonation' });
      links.push({ anchor: page, title: 'Rising' });
      break;

    case 'non-final':
      links.push({ anchor: 'intonation', title: 'Intonation' });
      links.push({ anchor: page, title: 'Non-Final' });
      break;

    case 'quiz':
      if ([QuizIndex.SameWordsDifferentStress, QuizIndex.WhereIsTheStress].includes(indexCarousel)) {
        links.push({ anchor: 'stress', title: 'Stress' });
      } else if ([QuizIndex.GuessThePattern, QuizIndex.ShoppingForAPresent].includes(indexCarousel)) {
        links.push({ anchor: 'intonation', title: 'Intonation' });
      } else if ([QuizIndex.OddPhonemeOut, QuizIndex.PhoneticSpelling].includes(indexCarousel)) {
        links.push({ anchor: 'phonemes', title: 'Phonemes' });
      }

      links.push({ anchor: page, title: 'Quiz' });
      break;
  }

  return links;
}

export { generateBreadcrumbs };