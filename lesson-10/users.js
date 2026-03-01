const users = [
    {
        id: "usr_001",
        name: "Olivia Marchetti",
        email: "olivia.marchetti@gmail.com",
        role: "buyer",
        createdAt: "2024-03-12T08:23:00Z",
        address: {
            street: "Via Roma 14",
            city: "Milan",
            country: "Italy",
            zip: "20121",
        },
        payment: {
            method: "card",
            cardLast4: "4242",
            cardBrand: "Visa",
        },
    },
    {
        id: "usr_002",
        name: "Lena Kovalenko",
        email: "lena.kovalenko@ukr.net",
        role: "seller",
        createdAt: "2023-11-05T14:10:00Z",
        address: {
            street: "Khreshchatyk St 22",
            city: "Kyiv",
            country: "Ukraine",
            zip: "01001",
        },
        payment: {
            method: "paypal",
            paypalEmail: "lena.seller@paypal.com",
        },
    },
    {
        id: "usr_003",
        name: "Marcus Hoffmann",
        email: "marcus.hoffmann@web.de",
        role: "buyer",
        createdAt: "2024-01-20T09:45:00Z",
        address: {
            street: "Alexanderplatz 5",
            city: "Berlin",
            country: "Germany",
            zip: "10178",
        },
        payment: {
            method: "card",
            cardLast4: "1337",
            cardBrand: "Mastercard",
        },
    },
    {
        id: "usr_004",
        name: "Sofia Andersen",
        email: "sofia.andersen@mail.dk",
        role: "seller",
        createdAt: "2023-08-30T11:00:00Z",
        address: {
            street: "Strøget 8",
            city: "Copenhagen",
            country: "Denmark",
            zip: "1160",
        },
        payment: {
            method: "bank_transfer",
            iban: "DK50 0040 0440 1162 43",
        },
    },
    {
        id: "usr_005",
        name: "James Thornton",
        email: "james.thornton@outlook.com",
        role: "admin",
        createdAt: "2023-01-01T00:00:00Z",
        address: {
            street: "Baker Street 221B",
            city: "London",
            country: "United Kingdom",
            zip: "NW1 6XE",
        },
        payment: {
            method: "card",
            cardLast4: "9999",
            cardBrand: "Amex",
        },
    },
    {
        id: "usr_006",
        name: "Yuki Tanaka",
        email: "yuki.tanaka@yahoo.co.jp",
        role: "buyer",
        createdAt: "2024-05-18T16:30:00Z",
        address: {
            street: "Shibuya 2-1-1",
            city: "Tokyo",
            country: "Japan",
            zip: "150-0002",
        },
        payment: {
            method: "card",
            cardLast4: "5678",
            cardBrand: "Visa",
        },
    },
    {
        id: "usr_007",
        name: "Camille Dubois",
        email: "camille.dubois@laposte.fr",
        role: "seller",
        createdAt: "2024-02-09T13:15:00Z",
        address: {
            street: "Rue de Rivoli 99",
            city: "Paris",
            country: "France",
            zip: "75001",
        },
        payment: {
            method: "paypal",
            paypalEmail: "camille.shop@paypal.com",
        },
    },
]

async function getUsersByRoleName(roleName, allUser) {
    return await allUser.filter(user => user.role === roleName);
}

const ROLE_LIST = ['buyer', 'seller', 'admin'];

async function main() {
    const [userData, allCards, analyticResponse] = await Promise.all(
        ROLE_LIST.map(role => getUsersByRoleName(role, users))
    )
    console.log(userData, allCards, analyticResponse);
}


main()
