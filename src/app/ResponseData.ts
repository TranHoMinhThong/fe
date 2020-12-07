export interface Item{
    id: number,
    name: string,
    price: number,
    quantity: number
}

export interface BillInfo{
    id: number,
    totalPrice: number,
    items: Item[]
    createdAt: any
}


