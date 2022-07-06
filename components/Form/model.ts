export type FormProps = {
    setCode: (code: string) => void
    code: string
    setCoinCode: (coinCode: string) => void
    fetchCoins: () => void
    loading: boolean
}