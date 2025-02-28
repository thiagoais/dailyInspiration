import { supabase } from "./supabase";

export interface Quote {
  id: number;
  text: string;
  author: string;
}

// Fallback quotes in case Supabase is not connected
export const fallbackQuotes: Quote[] = [
  {
    id: 1,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    id: 2,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    id: 3,
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    id: 4,
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 5,
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey",
  },
  {
    id: 6,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 7,
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    id: 8,
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    id: 9,
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    id: 10,
    text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    id: 11,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 12,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    id: 13,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    id: 14,
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    id: 15,
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 16,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 17,
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    id: 18,
    text: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou",
  },
  {
    id: 19,
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    id: 20,
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    id: 21,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  { id: 22, text: "What we think, we become.", author: "Buddha" },
  {
    id: 23,
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    id: 24,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    id: 25,
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  {
    id: 26,
    text: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 27,
    text: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
  },
  {
    id: 28,
    text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    id: 29,
    text: "The future belongs to those who prepare for it today.",
    author: "Malcolm X",
  },
  {
    id: 30,
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    id: 31,
    text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    id: 32,
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    id: 33,
    text: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    id: 34,
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    id: 35,
    text: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    id: 36,
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    id: 37,
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    id: 38,
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    id: 39,
    text: "May you live all the days of your life.",
    author: "Jonathan Swift",
  },
  {
    id: 40,
    text: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen",
  },
  {
    id: 41,
    text: "Do not let making a living prevent you from making a life.",
    author: "John Wooden",
  },
  {
    id: 42,
    text: "Life is ours to be spent, not to be saved.",
    author: "D. H. Lawrence",
  },
  {
    id: 43,
    text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe",
  },
  {
    id: 44,
    text: "Life is a long lesson in humility.",
    author: "James M. Barrie",
  },
  {
    id: 45,
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    id: 46,
    text: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    id: 47,
    text: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens",
  },
  {
    id: 48,
    text: "Life is trying things to see if they work.",
    author: "Ray Bradbury",
  },
  {
    id: 49,
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    id: 50,
    text: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr.",
  },
  {
    id: 51,
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    id: 52,
    text: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it.",
    author: "Barack Obama",
  },
  {
    id: 53,
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    id: 54,
    text: "If you really look closely, most overnight successes took a long time.",
    author: "Steve Jobs",
  },
  {
    id: 55,
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    id: 56,
    text: "I never dreamed about success, I worked for it.",
    author: "Estée Lauder",
  },
  {
    id: 57,
    text: "Success seems to be connected with action. Successful people keep moving.",
    author: "Conrad Hilton",
  },
  {
    id: 58,
    text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
  },
  {
    id: 59,
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 60,
    text: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    id: 61,
    text: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    author: "Jim Rohn",
  },
  {
    id: 62,
    text: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
  },
  {
    id: 63,
    text: "Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you.",
    author: "Zig Ziglar",
  },
  {
    id: 64,
    text: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
    author: "G. K. Chesterton",
  },
  {
    id: 65,
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    id: 66,
    text: "I never did anything worth doing by accident, nor did any of my inventions come indirectly through accident, except the phonograph. No, when I have fully decided that a result is worth getting, I go about it, and make trial after trial, until it comes.",
    author: "Thomas Edison",
  },
  {
    id: 67,
    text: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    id: 68,
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    id: 69,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    id: 70,
    text: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: "David Brinkley",
  },
  {
    id: 71,
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 72,
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    id: 73,
    text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    id: 74,
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    id: 75,
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    id: 76,
    text: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    id: 77,
    text: "Nothing is impossible, the word itself says, 'I'm possible!'",
    author: "Audrey Hepburn",
  },
  {
    id: 78,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 79,
    text: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
  {
    id: 80,
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    id: 81,
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    id: 82,
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    id: 83,
    text: "Certain things catch your eye, but pursue only those that capture the heart.",
    author: "Ancient Indian Proverb",
  },
  {
    id: 84,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 85,
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    id: 86,
    text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato",
  },
  {
    id: 87,
    text: "Teach thy tongue to say, 'I do not know,' and thous shalt progress.",
    author: "Maimonides",
  },
  {
    id: 88,
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    id: 89,
    text: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn't understand the assignment, and I told them they didn't understand life.",
    author: "John Lennon",
  },
  {
    id: 90,
    text: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    id: 91,
    text: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller",
  },
  {
    id: 92,
    text: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    id: 93,
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    id: 94,
    text: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    id: 95,
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
  },
  {
    id: 96,
    text: "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    id: 97,
    text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    author: "Sheryl Sandberg",
  },
  {
    id: 98,
    text: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
  },
  {
    id: 99,
    text: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb",
  },
  {
    id: 100,
    text: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.",
    author: "Unknown",
  },
];

export async function getRandomQuote(): Promise<Quote> {
  try {
    // Check if Supabase client is initialized
    if (!supabase) {
      console.warn("Supabase client not initialized. Using fallback quotes.");
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      return fallbackQuotes[randomIndex];
    }

    // Try to fetch from Supabase
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching quotes:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.warn("No quotes found in Supabase. Using fallback quotes.");
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      return fallbackQuotes[randomIndex];
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  } catch (error) {
    console.error("Error in getRandomQuote:", error);
    // Fallback to local quotes if there's an error
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  }
}

export async function subscribeEmail(
  email: string,
): Promise<{ success: boolean; message: string }> {
  try {
    // Check if Supabase client is initialized
    if (!supabase) {
      console.warn(
        "Supabase client not initialized. Cannot save subscription.",
      );
      return {
        success: false,
        message:
          "Subscription service is currently unavailable. Please try again later.",
      };
    }

    // Try to save to Supabase
    const { error } = await supabase
      .from("subscriptions")
      .insert([{ email, created_at: new Date() }]);

    if (error) {
      if (error.code === "23505") {
        // Unique violation error code
        return {
          success: true,
          message: "You are already subscribed to our daily quotes!",
        };
      }
      console.error("Error saving subscription:", error);
      return {
        success: false,
        message:
          "There was an error processing your subscription. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thank you for subscribing to our daily quotes!",
    };
  } catch (error) {
    console.error("Error in subscribeEmail:", error);
    return {
      success: false,
      message:
        "There was an error processing your subscription. Please try again.",
    };
  }
}
