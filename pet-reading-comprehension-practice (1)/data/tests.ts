
import { ReadingTest } from '../types';

export const readingTests: ReadingTest[] = [
  {
    id: 'amazing-journey',
    title: 'An Amazing Journey',
    subtitle: 'B1 English Reading Test',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    text: [
      'I was walking my dog near my home in San Francisco last spring when I saw a large black Labrador on its own. It was wearing a blue collar, but there was no sign of an owner anywhere. __GAP_1__ I was only joking, but it came running to me and stood by my side, ready to leave. I knew that this was someone’s lost pet.',
      'I fed and bathed the dog and checked its collar. There was a tag on it with a phone number. It turned out that the dog’s name was Banjo, and sure enough, he had an owner and a home. The trouble was that his home was in Chicago – over 2,000 miles away! __GAP_2__ Banjo had been missing for over a year, and they had no idea how he had got all the way across the country. They also had no idea how to get him back again because they had a newborn baby at home and couldn’t make the long journey to San Francisco.',
      'I used social media to ask for help. It wasn’t long before we had a long list of volunteers who wanted to help Banjo to get home. __GAP_3__ It was important that they knew how to take care of Banjo. Banjo set off on his journey, and met new people in California, Arizona, New Mexico, Texas, Oklahoma, Arkansas and Missouri before he reached his home state of Illinois.',
      '__GAP_4__ Banjo was delighted to meet the new baby and to be back home. His owners were thrilled to have him back. __GAP_5__ Banjo’s story just goes to show what people can achieve when they all work together!'
    ],
    options: [
      { id: 'A', text: 'I made sure that all of them were pet owners.' },
      { id: 'B', text: 'I decided to travel to Chicago with Banjo.' },
      { id: 'C', text: 'It took 20 drivers four days to reunite Banjo with his family.' },
      { id: 'D', text: 'I asked the dog if it wanted to come home with me.' },
      { id: 'E', text: 'I hope he won’t go wandering again.' },
      { id: 'F', text: 'His owners, Tina and Dan, were amazed to hear from me.' },
      { id: 'G', text: 'It was clearly hungry, and needed to rest.' },
      { id: 'H', text: 'I didn’t know who the dog belonged to.' }
    ],
    correctAnswers: { 1: 'D', 2: 'F', 3: 'A', 4: 'C', 5: 'E' }
  },
  {
    id: 'lost-luggage',
    title: 'Lost Luggage',
    subtitle: 'B1 English Reading Test',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    text: [
        'Two years ago, I went on holiday to Rome with my family. It was a four-hour train journey from our home, and we all helped to plan the trip. We were looking forward to seeing the famous sights! Everything went really well and we had a great time visiting the amazing tourist attractions. I was in charge of taking all the photos with my band new phone, which had an excellent camera. We stayed in Rome for two weeks, and it was really incredible.',
        'On the train journey back home, I decided to open my backpack, but I couldn’t find it. __GAP_1__ I was very upset because I’d packed my phone in that backpack, along with my travel journal. __GAP_2__ Weeks passed, and then months. At first, I contacted the train company every week, but after some time, it was clear that my backpack was never going to be found. After a while, I forgot all about it.',
        'Last month, I took the train to Florence on a school trip. Incredibly, my backpack went missing again! __GAP_3__ After Rome, I always kept my phone and other important items in my pockets.',
        'Two weeks after the Florence trip, I received a phone call from the train company. They told me they had my backpack, and they would send it to my local station. I assumed it was my backpack from the school trip. __GAP_4__ Someone from the train company had found the backpack from Rome in a dusty old storeroom! Everything inside it was safe, and I finally got to share the photos with my family. __GAP_5__ I decided we should all go back to Rome for another holiday … but this time, I would be much more careful with my things!'
    ],
    options: [
        { id: 'A', text: 'I never travelled with the same train company again.' },
        { id: 'B', text: 'When I arrived at the station, I couldn’t believe my eyes!' },
        { id: 'C', text: 'All my memories of Rome were in that backpack.' },
        { id: 'D', text: 'I couldn’t leave the station without my bag.' },
        { id: 'E', text: 'It was so wonderful to see them.' },
        { id: 'F', text: 'I knew I would never see my new phone again.' },
        { id: 'G', text: 'I searched and searched, but it was nowhere to be seen!' },
        { id: 'H', text: 'But, this time, there were no precious memories inside.' }
    ],
    correctAnswers: { 1: 'G', 2: 'C', 3: 'H', 4: 'B', 5: 'E' }
  },
  {
    id: 'why-the-sea-is-good',
    title: 'Why The Sea is Good for You',
    subtitle: 'B1 English Reading Test',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    text: [
      'We all love spending time by the sea. The lucky ones might live on the coast and enjoy the benefits throughout the year. __GAP_1__ Most of us would say we feel healthier by the ocean. In the past, doctors would actually recommend spending time by the sea to their patients. And research has shown that people who live on the coast are more likely to believe their health is good compared to those living in a city. So how do we benefit, exactly?',
      'Well, to start with it’s great for our mental health. __GAP_2__ They have shown that watching, listening to or being in the ocean helps our brains slow down. The sound of the waves can help us relax and has a positive effect in reducing feelings of stress. This is why people who have trouble sleeping are often told to listen to recordings of the sound of waves hitting the shore to help them relax at bedtime.',
      '__GAP_3__ We go out a lot more when we’re on holiday by the sea. We often become more active on holidays and people who live on the coast are usually more active too. And if you take your walks on the beach this is even better. __GAP_4__ The sea air is also good for people with breathing problems. There is less pollution in the air near the ocean and in the autumn and winter the air is fresher. __GAP_5__ It has even been found that the chemicals found in sea water are the same chemicals that help us have healthy skin.',
      'No wonder then that we often feel so much better at the end of a seaside holiday and why we look forward so much to booking our next one!'
    ],
    options: [
        { id: 'A', text: 'Being by the sea is also good for our physical health.' },
        { id: 'B', text: 'This is healthier than the dry atmosphere in homes with central heating.' },
        { id: 'C', text: 'It’s not just swimmers who know how to do this.' },
        { id: 'D', text: 'The rest of us have to wait for our next holiday.' },
        { id: 'E', text: 'However, in the end you’ll notice the difference.' },
        { id: 'F', text: 'Walking on sand requires more effort than on the pavement.' },
        { id: 'G', text: 'Scientists have discovered that we have something called a ‘blue mind’.' },
        { id: 'H', text: 'So scientists disagree about the reasons for doing this.' }
    ],
    correctAnswers: { 1: 'D', 2: 'G', 3: 'A', 4: 'F', 5: 'B' }
  }
];
