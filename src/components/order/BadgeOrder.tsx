
interface BadgeOrderProps {
    color: string,
    status: string
}

const BadgeOrder = ({ color, status } : BadgeOrderProps) => {

    return (
        <span className={getBadgeClasses(color)}>
            {status}
        </span>
    )

}

const getBadgeClasses = (color: string) => {
  const colors: Record<string, string> = {
    amber: 'bg-amber-100 text-amber-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    gray: 'bg-gray-100 text-gray-700'
  }

  return `inline-block px-3 py-1 text-sm rounded-full font-medium ${colors[color] || colors.gray}`;
}

export default BadgeOrder;