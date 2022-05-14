export const getForumBoards = () => [
    {
        id: 0,
        title: 'Announcements',
        description: 'Announcements regarding our community',
        topics: 2,
        lastestPost: null,
        icon: 'fas fa-bullhorn',
        iconColor: '#eeca82',
        posts: getAnnouncementPosts()
    },
    {
        id: 1,
        title: 'General Discussion',
        description: 'A place to talk about whatever you want',
        topics: 12,
        lastestPost: null,
        icon: 'fas fa-comments',
        iconColor: '#2ac3e2',
        posts: getGeneralDiscussionPosts()
    },
    {
        id: 2,
        title: 'Comments & Feedback',
        description: 'Got a question? Ask away!',
        topics: 12,
        posts: [],
        lastestPost: null,
        icon: 'fas fa-question',
        iconColor: '#e22a39'
    }
];

const getAnnouncementPosts = () => {
    return [
        {
            id: 0,
            title: 'Our goals for 2022',
            text: 'Our main goal for 2022 is to be awesome!',
            createdAt: '2021-08-21',
            userPhoto: 'user_one.png',
            boardId: 0,
            comments: [
                {
                    id: 0,
                    text: "Hey, don't steal my goal!!!",
                    author: {
                        name: 'Andrew Garfield',
                        userPhoto: 'user_three.jpg'
                    }
                },
                {
                    id: 1,
                    text: 'Such a positive note you guys! Stay awesome indeed.',
                    author: {
                        name: 'John Snow',
                        userPhoto: 'user_two.jpg'
                    }
                }
            ]
        },
        {
            id: 1,
            title: 'Important notes',
            text: 'Stay awesome',
            createdAt: '2021-05-21',
            userPhoto: 'user_two.jpg',
            boardId: 0,
            comments: []
        }
    ];
};

const getGeneralDiscussionPosts = () => {
    return [
        {
            id: 0,
            title: 'What kind of pets you have',
            text: "I'm curious to know what kind of pets the forum users have. I thought this could be a nice way to get to know each other a little better, so I'll start! My dog is a five month old Italian mastiff (Cane Corso). Since I got him from Barcelona I thought a Spanish name would be suitable, and I named him Don Jefe, or Jefe for short (which means \"boss man\"). Jefe is a cute, little beast who eats 1.5 kg raw meat every day. He love to fart, snore and play.",
            createdAt: '2022-01-12',
            userPhoto: 'user_three.jpg',
            boardId: 1,
            comments: []
        },
        {
            id: 1,
            title: 'My pet',
            text: "I have a Jack Russel Terrier called Milo. He can get a bit crazy some times but I love him. There once was someone who wanted to put their JRT through plastic surgery to look more like Milo. That's crazy and unacceptable! Here is a picture of him with the mask I bought for Katherine: http://stories.barkpost.com/wp-content/uploads/2014/04/dogmask.jpg. Sometimes, at night, he looks like this when he plays with the mask: http://www.mobuzz.tv/wp-content/uploads/2014/11/original.jpg",
            createdAt: '2021-05-21',
            userPhoto: 'user_four.jpg',
            boardId: 1,
            comments: []
        },
        {
            id: 2,
            title: 'Jamaican food',
            text: 'In Jamaica you can get a steak and kidney pie for $1.75, a chicken and mushroom pie for $1.60 and an apple pie for $2.15. In St Kitts and Nevis a steak and kidney pie will cost you $2, a chicken pie (without mushrooms) is $1.70 and a cherry pie can be yours for $1.95. In Trinidad and Tobago, that steak and kidney pie comes in at $2.50, but you can buy two for $3.50, while the chicken and mushroom pie is $2.25, or two for $3.25. They also offer meat and potato pie for $2, or two for $3. Their apple pies and cherry pies are often sold for $2.75, or two (any combination) for $4.75. Those my friends are the Pie Rates of the Caribbean.',
            createdAt: '2022-02-18',
            userPhoto: 'user_two.jpg',
            boardId: 1,
            comments: [
                {
                    id: 0,
                    text: 'wow',
                    author: {
                        name: 'Michael Jordan',
                        userPhoto: 'user_three.jpg'
                    }
                },
                {
                    id: 1,
                    text: 'You should try their beef stew!',
                    author: {
                        name: 'John Snow',
                        userPhoto: 'user_one.png'
                    }
                },
                {
                    id: 2,
                    text: 'Good to know before my trip there. Thanks',
                    author: {
                        name: 'Christine',
                        userPhoto: 'user_four.jpg'
                    }
                }
            ]
        }
    ];
};

export const getLatestPosts = () => {
    return [
        {
            board: 0,
            posts: getAnnouncementPosts()
        },
        {
            board: 1,
            posts: getGeneralDiscussionPosts()
        }
    ];
};
