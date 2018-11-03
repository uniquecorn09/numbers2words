const Converter = require("./converter")

it("should return atomic number words", () => {
    expect(Converter.convert(2)).toBe("two");
    expect(Converter.convert(18)).toBe("eighteen");
})

it("should combine tens digit and atomic number ", () => {
    expect(Converter.convert(21)).toBe("twenty-one");
    expect(Converter.convert(116)).toBe("one hundred and sixteen");
    expect(Converter.convert(834)).toBe("eight hundred and thirty-four");
})
it("should leave zero with tens digits ", () => {
    expect(Converter.convert(30)).toBe("thirty");
})
it("should handle negative digits ", () => {
    expect(Converter.convert(-34)).toBe("minus thirty-four");
})
it("should combine tens potency with tens factor", () => {
    expect(Converter.convert(100)).toBe("one hundred");
    expect(Converter.convert(1000)).toBe("one thousand");
    expect(Converter.convert(10000)).toBe("ten thousand");
    expect(Converter.convert(100000)).toBe("one hundred thousand");
    expect(Converter.convert(1000000)).toBe("one million");
    expect(Converter.convert(10000000)).toBe("ten million");
    expect(Converter.convert(100000000)).toBe("one hundred million");
    expect(Converter.convert(1000000000)).toBe("one billion");
})
it("should combine tens potency suffix", () => {
    expect(Converter.convert(1553)).toBe("one thousand five hundred and fifty-three");
    expect(Converter.convert(13611)).toBe("thirteen thousand six hundred and eleven");
    expect(Converter.convert(123466)).toBe("one hundred and twenty-three thousand four hundred and sixty-six");
    expect(Converter.convert(3123466)).toBe("three million one hundred and twenty-three thousand four hundred and sixty-six");
    expect(Converter.convert(1234567890)).toBe("one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety");
})