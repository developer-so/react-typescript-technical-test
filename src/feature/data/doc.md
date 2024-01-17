## Fetch all the tweets

GET https://test-twitter-api.lixium.dev/tweets

Response Body:
[
	{
		"id": "e6b4ab0f-6a35-e39d-6fcd-7da29b939ac9",
		"author": "John Doe",
		"content": "Tweet number one",
		"createdAt": "2023-12-21T13:10:34.614Z",
		"updatedAt": "2023-12-21T13:10:34.615Z"
	},
	{
		"id": "cb3835e0-8eb1-195b-1ba7-d0e80da703ef",
		"author": "Jane Doe",
		"content": "Tweet number two",
		"createdAt": "2023-12-21T13:10:34.615Z",
		"updatedAt": "2023-12-21T13:10:34.615Z"
	},
	{
		"id": "bb10173e-7cbd-24d1-76d9-71af7a6a5ad7",
		"author": "John Appleseed",
		"content": "Tweet number three",
		"createdAt": "2023-12-21T13:10:34.615Z",
		"updatedAt": "2023-12-21T13:10:34.615Z"
	}
]


## Fetch a tweet by its ID (you may not need this one)

GET https://test-twitter-api.lixium.dev/tweets/e6b4ab0f-6a35-e39d-6fcd-7da29b939ac9

Response Body:
{
	"id": "e6b4ab0f-6a35-e39d-6fcd-7da29b939ac9",
	"author": "John Doe",
	"content": "Tweet number one",
	"createdAt": "2023-12-21T13:10:34.614Z",
	"updatedAt": "2023-12-21T13:10:34.615Z"
}


## Create a tweet

POST https://test-twitter-api.lixium.dev/tweets

Request Body:
{
	"author": "Laurentiu",
	"content": "Tweet number four"
}

Response Body:
{
	"id": "1234abcd-6a35-e39d-6fcd-1a2b3c4d5e6f",
	"author": "Laurentiu",
	"content": "Tweet number four",
	"createdAt": "2023-12-21T13:10:34.614Z",
	"updatedAt": "2023-12-21T13:10:34.615Z"
}


## Update a tweet by its ID

PATCH https://test-twitter-api.lixium.dev/tweets/e6b4ab0f-6a35-e39d-6fcd-7da29b939ac9

Request Body:
{
	"author": "John Doe Two",
	"content": "Tweet number one UPDATED"
}

Response Body:
{
	"id": "e6b4ab0f-6a35-e39d-6fcd-7da29b939ac9",
	"author": "John Doe Two",
	"content": "Tweet number one UPDATED",
	"createdAt": "2023-12-21T13:10:34.614Z",
	"updatedAt": "2023-12-21T13:10:34.615Z"
}


## Delete a tweet by its ID

DELETE https://test-twitter-api.lixium.dev/tweets/e6b4ab0f-6a35-e39d-6fcd-7da29b939ac9

Response Body:
{
	"id": "e6b4ab0f-6a35-e39d-6fcd-7da29b939ac9",
	"author": "John Doe Two",
	"content": "Tweet number one UPDATED",
	"createdAt": "2023-12-21T13:10:34.614Z",
	"updatedAt": "2023-12-21T13:10:34.615Z"
}