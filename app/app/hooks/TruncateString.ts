

export default function TruncateString(str: string, number: number){
    return str.substring(0, number) + '...'
}