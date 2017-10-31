export const mockedClubId = 80327326;

export const mockedClub = {
    "id": mockedClubId,
    "resource_state": 2,
    "name": "Team Strava Cycling",
    "profile_medium": "http://pics.com/clubs/1/medium.jpg",
    "profile": "http://pics.com/clubs/1/large.jpg",
    "cover_photo": "http://pics.com/clubs/1/cover/large.jpg",
    "cover_photo_small": "http://pics.com/clubs/1/cover/small.jpg",
    "sport_type": "cycling",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "private": true,
    "member_count": 23,
    "featured": false,
    "verified": false,
    "url": "strava-cycling"
};

export function listClubActivities() {
    return [
        {
            "id": mockedClubId,
            "resource_state": 2,
            "guid": "2013-09-05-10-56-52.fit",
            "external_id": "2013-09-05-10-56-52.fit",
            "upload_id": 87467289,
            "athlete": {
                "id": 227615,
                "resource_state": 2,
                "firstname": "John",
                "lastname": "Applestrava",
                "profile_medium": "http://pics.com/227615/medium.jpg",
                "profile": "http://pics.com/227615/large.jpg",
                "city": "San Francisco",
                "state": "CA",
                "country": "United States",
                "sex": "M",
                "friend": null,
                "follower": "accepted",
                "premium": true,
                "created_at": "2011-03-19T21:59:57Z",
                "updated_at": "2013-09-05T16:46:54Z"
            },
            "name": "Commute PR - 11minutes flat",
            "distance": 4509.9,
            "moving_time": 661,
            "elapsed_time": 866,
            "total_elevation_gain": 4.0,
            "type": "Ride",
            "start_date": "2013-09-05T17:56:52Z",
            "start_date_local": "2013-09-05T10:56:52Z",
            "timezone": "(GMT-08:00) America/Los_Angeles",
            "start_latlng": [
                37.783718,
                -122.444316
            ],
            "end_latlng": [
                37.78078,
                -122.396222
            ],
            "location_city": "San Francisco",
            "location_state": "CA",
            "location_country": "United States",
            "achievement_count": 0,
            "kudos_count": 2,
            "comment_count": 2,
            "athlete_count": 1,
            "photo_count": 0,
            "map": {
                "id": "a80327326",
                "summary_polyline": "e{reFzkgjV`e@wg^{^{h@jMkR_IwL",
                "resource_state": 2
            },
            "trainer": false,
            "commute": true,
            "manual": false,
            "private": false,
            "flagged": false,
            "average_watts": 127.06,
            "kilojoules": 83.98666,
            "has_kudoed": false
        }
    ];
}
