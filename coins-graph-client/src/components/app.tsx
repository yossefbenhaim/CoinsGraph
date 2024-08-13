import { PathName } from 'models/enums/pathName'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Routes>
					<Route path={PathName.HOME} element={<Library />}>
						<Route path={PathName.SELECT_CURRENCIES} element={<UrlShortcutForm />} />
						<Route path={PathName.GRAPH_COINS} element={<UrlShortcutTable />} />
					</Route>
				</Routes>
			</Routes>
		</BrowserRouter>
	)
}

export default App



// <div className="h-screen bg-green-300">
// 			<header className="h-[10%] bg-purple-300 flex flex-row justify-center items-center gap-10">
// 				<p>menu</p>
// 				<p>menu</p>
// 				<p>menu</p>
// 			</header>
// 			<div className="h-full flex flex-row justify-between px-5">
// 				<div className="bg-red-400 w-[20%] flex flex-row pt-10">
// 					<p>This graph displays the amounts of different cryptocurrencies relative to [selected base currency]</p>
// 				</div>
// 				<div className="bg-blue-400 w-[75%] h-[100%]">graph</div>
// 			</div>
// 		</div>