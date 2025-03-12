import { Contestant } from './content';

type Song_cardProps = {
    contestant: Contestant;
}
const Song_card = ({contestant}: Song_cardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 transition-transform hover:scale-105">
            <div className="w-full h-56 overflow-hidden">
                <img 
                    src={`https://flagcdn.com/w320/${contestant.country.toLocaleLowerCase()}.png`}
                    className="w-full h-full object-cover"
                    alt={`Flag of ${contestant.country}`}
                />
            </div>
            <div className="p-8 relative">
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-800 truncate">
                        {contestant.song}
                    </h3>
                    <p className="text-2xl text-gray-600">
                        {contestant.artist}
                    </p>
                    <p className="text-xl text-gray-500 font-medium">
                        {contestant.countryName}
                    </p>
                    <p className={`text-2xl font-semibold text-blue-600 ${contestant.roundName !== "final" ? "text-red-500" : ""}`}>
                        {contestant.points} points ({contestant.roundName}) {contestant.isDisqualified ? " (DQ)" : ""}
                    </p>
                </div>
                <div className="absolute bottom-6 right-6 bg-[rgb(36,36,36)] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold">
                    {contestant.id + 1}
                </div>
            </div>
        </div>
    )
}

export default Song_card;