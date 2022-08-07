import { Pronunciation } from '../types';

export const diphthongs: Pronunciation[] = [
  {
    phoneme: '/aɪ/',
    graphemes: 'i, igh, y, ie',
    examples: '<u>i</u>ce, b<u>ye</u>, l<u>i</u>me, f<u>igh</u>t, sk<u>y</u>',
    audioPhoneme: 'diphthongs/phonemes/-aɪ-.m4a',
    audioExamples: 'diphthongs/examples/ice, bye, lime, fight , sky.m4a'
  },
  {
    phoneme: '/eɪ/',
    graphemes: 'a, a-e, ai, ay, eigh, ey',
    examples: '<u>a</u>corn, j<u>a</u>d<u>e</u>, p<u>ai</u>d, w<u>eigh</u>t, h<u>ey</u>',
    audioPhoneme: 'diphthongs/phonemes/-eɪ-.m4a',
    audioExamples: 'diphthongs/examples/acorn, jade, paid, weight, hey.m4a'
  },
  {
    phoneme: '/ɔɪ/',
    graphemes: 'oi, oy',
    examples: 'b<u>oy</u>, c<u>oi</u>n, s<u>oi</u>l, v<u>oi</u>ce, turqu<u>oi</u>se',
    audioPhoneme: 'diphthongs/phonemes/-ɔɪ-.m4a',
    audioExamples: 'diphthongs/examples/boy, coin, soil, voice, turquoise.m4a'
  },
  {
    phoneme: '/oʊ/',
    graphemes: 'o, ow',
    examples: 'g<u>o</u>, t<u>o</u>tal, gr<u>ow</u>, <u>o</u>ver, g<u>ol</u>d',
    audioPhoneme: 'diphthongs/phonemes/-oʊ-.m4a',
    audioExamples: 'diphthongs/examples/go, total, grow, over, gold.m4a'
  },
  {
    phoneme: '/aʊ/',
    graphemes: 'ow',
    examples: 'c<u>ow</u>, n<u>ow</u>, br<u>ow</u>n, w<u>ow</u>, <u>gow</u>n',
    audioPhoneme: 'diphthongs/phonemes/-aʊ-.m4a',
    audioExamples: 'diphthongs/examples/cow, now, brown, wow, gown.m4a'
  }
];

export const consonants: Pronunciation[] = [
  {
    phoneme: '/p/',
    graphemes: 'p, pp',
    examples: '<u>p</u>en, u<u>pp</u>er, pu<u>pp</u>y, gra<u>p</u>e, ha<u>pp</u>y',
    audioPhoneme: 'consonants/phonemes/-p-.m4a',
    audioExamples: 'consonants/examples/pen, upper, puppy, grape, happy.m4a'
  },
  {
    phoneme: '/b/',
    graphemes: 'b, bb',
    examples: '<u>b</u>ig, ho<u>bb</u>y, <u>b</u>ee, li<u>b</u>rary, ca<u>b</u>',
    audioPhoneme: 'consonants/phonemes/-b-.m4a',
    audioExamples: 'consonants/examples/big, hobby, bee, library, cab.m4a'
  },
  {
    phoneme: '/t/',
    graphemes: 't, tt, bt, ght, ed',
    examples: '<u>t</u>est, ki<u>tt</u>en, dou<u>bt</u>, l<u>ight</u>, work<u>ed</u>',
    audioPhoneme: 'consonants/phonemes/-t-.m4a',
    audioExamples: 'consonants/examples/test, kitten, doubt, light, worked.m4a'
  },
  {
    phoneme: '/d/',
    graphemes: 'd, dd, de, ld',
    examples: '<u>d</u>aughter, a<u>dd</u>, br<u>ide</u>, wou<u>ld</u>, be<u>d</u>',
    audioPhoneme: 'consonants/phonemes/-d-.m4a',
    audioExamples: 'consonants/examples/daughter, add, bride, would, bed.m4a'
  },
  {
    phoneme: '/tʃ/',
    graphemes: 'ch, c,  tch, t+ure, t+ion',
    examples: '<u>ch</u>ur<u>ch</u>, <u>c</u>ello, bea<u>ch</u>, ma<u>ture</u>, ques<u>tion</u>',
    audioPhoneme: 'consonants/phonemes/-tʃ-.m4a',
    audioExamples: 'consonants/examples/church, cello, beach, mature, question.m4a'
  },
  {
    phoneme: '/dʒ/',
    graphemes: 'g, j, ge, dge, gg',
    examples: 'ca<u>ge</u>, <u>j</u>am,  ju<u>dge</u>, su<u>gg</u>est,  e<u>dge</u>',
    audioPhoneme: 'consonants/phonemes/-dʒ-.m4a',
    audioExamples: 'consonants/examples/cage, jam, judge, suggest, edge.m4a'
  },
  {
    phoneme: '/k/',
    graphemes: 'c, k,  ck, ch, que, q, cc',
    examples: '<u>c</u>ause, <u>k</u>ing,  la<u>ck</u>,  a<u>ch</u>e, <u>que</u>st',
    audioPhoneme: 'consonants/phonemes/-k-.m4a',
    audioExamples: 'consonants/examples/cause, king, lack, ache, quest.m4a'
  },
  {
    phoneme: '/g/',
    graphemes: 'g, gg, gu, gue, gh',
    examples: 'hu<u>g</u>, bi<u>gge</u>r, <u>gue</u>st, <u>gh</u>ost, va<u>gue</u>',
    audioPhoneme: 'consonants/phonemes/-g-.m4a',
    audioExamples: 'consonants/examples/hug, bigger, guest, ghost, vague.m4a'
  },
  {
    phoneme: '/f/',
    graphemes: 'f, ff, ph, lf, fe',
    examples: '<u>f</u>lower, o<u>ff</u>er, gra<u>ph</u>, ha<u>lf</u>, gira<u>ffe</u>',
    audioPhoneme: 'consonants/phonemes/-f-.m4a',
    audioExamples: 'consonants/examples/flower, offer, graph, half, giraffe.m4a'
  },
  {
    phoneme: '/v/',
    graphemes: 'v, ve',
    examples: '<u>ve</u>st, ha<u>ve</u>, glo<u>ve</u>, wi<u>ve</u>s, wa<u>ve</u>',
    audioPhoneme: 'consonants/phonemes/-v-.m4a',
    audioExamples: 'consonants/examples/vest, have, glove, wives, wave.m4a'
  },
  {
    phoneme: '/θ/',
    graphemes: 'th',
    examples: '<u>Th</u>ursday, <u>th</u>ank, ba<u>th</u>, no<u>th</u>ing, bo<u>th</u>',
    audioPhoneme: 'consonants/phonemes/-θ-.m4a',
    audioExamples: 'consonants/examples/Thursday, thank, bath, nothing, both.m4a'
  },
  {
    phoneme: '/ð/',
    graphemes: 'th, the',
    examples: 'wi<u>th</u>, mo<u>th</u>er, <u>th</u>ose, ga<u>th</u>er, fur<u>th</u>er',
    audioPhoneme: 'consonants/phonemes/-ð-.m4a',
    audioExamples: 'consonants/examples/with, mother, those, gather, further.m4a'
  },
  {
    phoneme: '/s/',
    graphemes: 's, ss,  ps, c, sc, ce, se',
    examples: 'ki<u>ss</u>, <u>ps</u>ychology, ri<u>ce</u>, <u>c</u>ircle, pea<u>ce</u>',
    audioPhoneme: 'consonants/phonemes/-s-.m4a',
    audioExamples: 'consonants/examples/kiss, psychology, rice, circle, peace.m4a'
  },
  {
    phoneme: '/z/',
    graphemes: 'z, zz, se, ss',
    examples: '<u>z</u>oo, ja<u>zz</u>, sci<u>ss</u>or, la<u>z</u>y, qui<u>zz</u>es',
    audioPhoneme: 'consonants/phonemes/-z-.m4a',
    audioExamples: 'consonants/examples/zoo, jazz, scissor, lazy, quizzes.m4a'
  },
  {
    phoneme: '/ʃ/',
    graphemes: 'sh, ti, ss, ch, tion, sion',
    examples: '<u>sh</u>are, mo<u>tion</u>, pa<u>ssion</u>, ten<u>sion</u>, Engli<u>sh</u>',
    audioPhoneme: 'consonants/phonemes/-ʃ-.m4a',
    audioExamples: 'consonants/examples/share, motion, passion, tension, English.m4a'
  },
  {
    phoneme: '/ʒ/',
    graphemes: 's, ge, sion, sure',
    examples: 'A<u>s</u>ia, ca<u>s</u>ual, bei<u>ge</u>, vi<u>sion</u>, mea<u>sure</u>',
    audioPhoneme: 'consonants/phonemes/-ʒ-.m4a',
    audioExamples: 'consonants/examples/Asia, casual, beige, vision, measure.m4a'
  },
  {
    phoneme: '/m/',
    graphemes: 'm, mm, mb, me, mn',
    examples: '<u>m</u>o<u>m</u>, gra<u>mm</u>ar, cli<u>mb</u>, ga<u>me</u>, autu<u>mn</u>',
    audioPhoneme: 'consonants/phonemes/m.m4a', // TODO: rename?
    audioExamples: 'consonants/examples/mom, grammar, climb, game, autumn.m4a'
  },
  {
    phoneme: '/n/',
    graphemes: 'n, ne, nn, kn, pn, gn',
    examples: '<u>n</u>i<u>ne</u>, co<u>nn</u>ect, <u>kn</u>ife, <u>pn</u>eumonia, <u>gn</u>aw',
    audioPhoneme: 'consonants/phonemes/-n-.m4a',
    audioExamples: 'consonants/examples/nine, connect, knife, pneumonia, gnaw.m4a'
  },
  {
    phoneme: '/ŋ/',
    graphemes: 'ng, n',
    examples: 'si<u>ng</u>, ba<u>n</u>k, a<u>ng</u>ry, dri<u>n</u>k, ju<u>n</u>gle',
    audioPhoneme: 'consonants/phonemes/-ŋ-.m4a',
    audioExamples: 'consonants/examples/sing, bank, angry, drink, jungle.m4a'
  },
  {
    phoneme: '/j/',
    graphemes: 'y, io, u',
    examples: '<u>y</u>oung, on<u>io</u>n, opin<u>io</u>n, <u>y</u>es, <u>u</u>se',
    audioPhoneme: 'consonants/phonemes/-j-.m4a',
    audioExamples: 'consonants/examples/young, onion, opinion, yes, use.m4a'
  },
  {
    phoneme: '/l/',
    graphemes: 'l, ll, le',
    examples: '<u>l</u>ong, pi<u>ll</u>, tab<u>le</u>, <u>l</u>ike<u>l</u>y, <u>l</u>amp',
    audioPhoneme: 'consonants/phonemes/-l-.m4a',
    audioExamples: 'consonants/examples/long, pill, table, likely, lamp.m4a'
  },
  {
    phoneme: '/r/',
    graphemes: 'r, rr, wr, rh',
    examples: '<u>r</u>est, bo<u>rr</u>ow, <u>rh</u>ythm, <u>wr</u>ite, <u>wr</u>ap',
    audioPhoneme: 'consonants/phonemes/-r-.m4a',
    audioExamples: 'consonants/examples/Rest, borrow, rhythm, write, wrap.m4a' // TODO: rename
  },
  {
    phoneme: '/w/',
    graphemes: 'w, wh, u, o',
    examples: '<u>w</u>est, <u>wh</u>en, q<u>u</u>iet, <u>o</u>ne, <u>wh</u>ale',
    audioPhoneme: 'consonants/phonemes/-w-.m4a',
    audioExamples: 'consonants/examples/west, when, quiet, one, whale.m4a'
  },
  {
    phoneme: '/h/',
    graphemes: 'h, wh',
    examples: '<u>h</u>ome, <u>wh</u>ole, <u>wh</u>o, <u>h</u>air, a<u>h</u>ead',
    audioPhoneme: 'consonants/phonemes/-h-.m4a',
    audioExamples: 'consonants/examples/home, whole, who, hair, ahead.m4a'
  }
];

export const vowels: Pronunciation[] = [
  {
    phoneme: '/iː/',
    graphemes: 'e, ee, ea, ey, ie, y',
    examples: 'gr<u>ee</u>n, sh<u>ee</u>p, t<u>ea</u>, k<u>ey</u>, funn<u>y</u>',
    audioPhoneme: 'vowels/phonemes/-iː-.m4a',
    audioExamples: 'vowels/examples/green, sheep, tea, key, funny.m4a'
  },
  {
    phoneme: '/ɪ/',
    graphemes: 'i, y, ui, u',
    examples: 'p<u>i</u>nk, s<u>y</u>mbol, b<u>ui</u>ld, b<u>u</u>sy, q<u>ui</u>lt',
    audioPhoneme: 'vowels/phonemes/-ɪ-.m4a',
    audioExamples: 'vowels/examples/-pink, symbol, build, busy, quilt.m4a' // TODO: rename
  },
  {
    phoneme: '/ʊ/',
    graphemes: 'oo, ou, u',
    examples: 'w<u>oo</u>d, c<u>ou</u>ld, f<u>ul</u>l, b<u>oo</u>k, p<u>u</u>sh',
    audioPhoneme: 'vowels/phonemes/-ʊ-.m4a',
    audioExamples: 'vowels/examples/wood, could, full, book, push.m4a'
  },
  {
    phoneme: '/uː/',
    graphemes: 'u, o, oo, ou',
    examples: 'bl<u>u</u>e, wh<u>o</u>, n<u>oo</u>n, y<u>ou</u>, gr<u>ou</u>p',
    audioPhoneme: 'vowels/phonemes/-uː-.m4a',
    audioExamples: 'vowels/examples/blue, who, noon, you, group.m4a'
  },
  {
    phoneme: '/e/',
    graphemes: 'e, ea, ai',
    examples: 'm<u>e</u>n, br<u>ea</u>d, m<u>e</u>t, s<u>ai</u>d, h<u>ea</u>d',
    audioPhoneme: 'vowels/phonemes/-e-.m4a',
    audioExamples: 'vowels/examples/men, bread, met, said, head.m4a'
  },
  {
    phoneme: '/ə/',
    graphemes: '(schwa sound)',
    examples: 'b<u>a</u>nana, th<u>e,</u> ev<u>e</u>r, p<u>o</u>lice, <u>u</u>pon',
    audioPhoneme: 'vowels/phonemes/-ə-.m4a',
    audioExamples: 'vowels/examples/banana, the, ever, police, upon.m4a'
  },
  {
    phoneme: '/ɜː/',
    graphemes: 'i(r), u(r), ea(r)',
    examples: 'b<u>ir</u>d, h<u>ur</u>t, l<u>ear</u>n, <u>ear</u>th, f<u>ur</u>niture',
    audioPhoneme: 'vowels/phonemes/-ɜː-.m4a',
    audioExamples: 'vowels/examples/bird, hurt, learn, earth, furniture.m4a'
  },
  {
    phoneme: '/ɔː/',
    graphemes: 'o(r), oo(r), o(r)e, oa(r)',
    examples: 'm<u>or</u>ning, fl<u>oor</u>, w<u>ore</u>, b<u>oar</u>d, sp<u>or</u>t',
    audioPhoneme: 'vowels/phonemes/-ɔː-.m4a',
    audioExamples: 'vowels/examples/morning, floor, wore, board, sport.m4a'
  },
  {
    phoneme: '/æ/',
    graphemes: 'a, au, ai',
    examples: '<u>a</u>pple, b<u>a</u>ck, pl<u>ai</u>d, l<u>au</u>gh, <u>a</u>fter',
    audioPhoneme: 'vowels/phonemes/-æ-.m4a',
    audioExamples: 'vowels/examples/apple, back, plaid, laugh, after.m4a'
  },
  {
    phoneme: '/ʌ/',
    graphemes: 'u, o, oo, oe',
    examples: '<u>u</u>nder, h<u>o</u>ney, fl<u>oo</u>d, d<u>oe</u>s, f<u>u</u>n',
    audioPhoneme: 'vowels/phonemes/-ʌ-.m4a',
    audioExamples: 'vowels/examples/under, honey, flood, does, fun.m4a'
  },
  {
    phoneme: '/aː/',
    graphemes: 'a(r), o, ea(r), ow',
    examples: 'h<u>ar</u>d, sh<u>ar</u>k, h<u>ear</u>t, kn<u>ow</u>ledge, b<u>o</u>dy',
    audioPhoneme: 'vowels/phonemes/-aː-.m4a',
    audioExamples: 'vowels/examples/hard, shark, heart, knowledge, body.m4a'
  },
  {
    phoneme: '/ɒ/',
    graphemes: 'o',
    examples: 'l<u>o</u>t, cl<u>o</u>th, h<u>o</u>nest, rob<u>o</u>t, st<u>o</u>p',
    audioPhoneme: 'vowels/phonemes/-ɒ-.m4a',
    audioExamples: 'vowels/examples/lot, cloth, honest, robot, stop.m4a'
  }
];
