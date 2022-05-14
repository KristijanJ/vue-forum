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
        posts: [],
        lastestPost: null,
        icon: 'fas fa-comments',
        iconColor: '#2ac3e2'
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
            text: "I'm curious to know what kind of pets the forum users have. I thought this could be a nice way to get to know each other a little better, so I'll start!\n\nMy dog is a five month old Italian mastiff (Cane Corso). Since I got him from Barcelona I thought a Spanish name would be suitable, and I named him Don Jefe, or Jefe for short (which means \"boss man\").\n\nJefe is a cute, little beast who eats 1.5 kg raw meat every day. He love to fart, snore and play.\n\nHere's Jefe with his Instagram hat and sqeaky ball 🎉🎉🎉\n![Don Jefe](http://i.imgur.com/XCWzR6l.jpg)\n"
        },
        {
            text: "I have a Jack Russel Terrier called Milo. He can get a bit crazy some times but I love him.\n\nThere once was [ someone who wanted to put their JRT through plastic surgery](http://www.mirror.co.uk/news/world-news/family-slammed-after-getting-pet-9839609) to look more like Milo. That's crazy and unacceptable!\n\nHere is a picture of him with the mask I bought for Katherine:\n\n![](http://stories.barkpost.com/wp-content/uploads/2014/04/dogmask.jpg)\n\nSometimes, at night, he looks like this when he plays with the mask:\n![](http://www.mobuzz.tv/wp-content/uploads/2014/11/original.jpg)\n"
        }
    ];
};
