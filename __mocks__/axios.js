const axios = {
  create: () => new Promise(() => {}),
  get: () =>
    new Promise(res =>
      res({
        id: 13,
        url: "http://www.tvmaze.com/shows/13/the-flash",
        name: "The Flash",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Action", "Science-Fiction"],
        status: "Running",
        runtime: 60,
        premiered: "2014-10-07",
        officialSite: "http://www.cwtv.com/shows/the-flash/",
        schedule: { time: "20:00", days: ["Tuesday"] },
        rating: { average: 8.1 },
        weight: 100,
        network: {
          id: 5,
          name: "The CW",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
          }
        },
        webChannel: null,
        externals: { tvrage: 36939, thetvdb: 279121, imdb: "tt3107288" },
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_portrait/167/418419.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/167/418419.jpg"
        },
        summary:
          '<p>After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash!</p>',
        updated: 1544917493,
        _links: {
          self: { href: "http://api.tvmaze.com/shows/13" },
          previousepisode: { href: "http://api.tvmaze.com/episodes/1557701" },
          nextepisode: { href: "http://api.tvmaze.com/episodes/1557702" }
        }
      })
    )
};
export default axios;
