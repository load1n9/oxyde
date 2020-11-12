
export const WhistleLanguageDef = {
    defaultToken: "",
    number: /\d+(\.\d+)?/,
    keywords: [
        "import",
        "as",
        "from",
        "export",
        "fun",
        "return",
        "if",
        "else",
        "while",
        "break",
        "continue",
        "var",
        "val",
        "none",
        "for",
        "in",
        "match",
        "type",
        "struct",
        "trait",
    ],
    tokenizer: {
        root: [
            { include: "@whitespace" },
            { include: "@numbers" },
            { include: "@strings" },
            { include: "@tags" },
            [/^@\w+/, { cases: { "@keywords": "keyword" } }],
        ],
        whitespace: [
            [/^\s*#([ =|].*)?$/, "comment"],
            [/\s+/, "white"],
        ],
        numbers: [
            [/@number/, "number"],
        ],
        strings: [
            [/[=|][ @number]*$/, "string.escape"],
        ],
        tags: [
            [/^%[a-zA-Z]\w*/, "tag"],
            [/#[a-zA-Z]\w*/, "tag"],
        ],
    },
}


export const WhistleConfiguration = {
    comments: {
        lineComment: "//",
    },
    brackets: [
        ["{", "}"], ["[", "]"], ["(", ")"],
    ],
}