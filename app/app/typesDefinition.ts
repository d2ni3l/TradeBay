

// object must be a promise in typescript if function is async 

export interface Article {
   article: {
    id: string
    createdAt: string,
    userId: string,
    title: string,
    description: string,
    price: string,
    imgSrc: string,
    category: string,
    condition:string
   }


}

export interface User {
   currentUser: {
      createdAt: string;
      emailVerified: string | undefined;
      updatedAt: string;
      id: string;
      email: string | null;
      name: string | null;
      image: string | null;
      hashedPassword: string | null;
      favoriteIds: string[];
  } | null | undefined
   }
   
