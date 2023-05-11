import listClientUsecase from "./list.client.usecase";

test("Teste unitario ListClientUseCase", async() => {
    expect(await listClientUsecase.execute()).toEqual([]);
});