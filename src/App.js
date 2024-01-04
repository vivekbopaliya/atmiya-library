import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Materials from './components/Materials';
import SearchBar from './components/SearchBar';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from './ui/page-header';
import { Separator } from './ui/separator';


function App() {
  return (
    <main className=' max-w-screen min-h-screen flex flex-col'>

      <Header />
      <div className='max-w-7xl container flex  flex-col justify-between items-center '>


        <main className='flex justify-center pb-2 -mt-9 -mb-7 '>

          <div>



          </div>
          <PageHeader className='max-w-4xl' >
            <div
              className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium" >
              🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
              <span className="sm:hidden">Welcome to Atmiya University Library & Learning Center</span>
              <span className="hidden sm:inline">
                Welcome to Atmiya University Library & Learning Center
              </span>
            </div>
            <PageHeaderHeading className="hidden md:block ">
              Your go-to source for the knowledge.
            </PageHeaderHeading>
            <PageHeaderHeading className="md:hidden">
            </PageHeaderHeading>
            <PageHeaderDescription>
              Books. Periodicals. Ebooks & More.
            </PageHeaderDescription>
          </PageHeader>
        </main>



      </div>

      <SearchBar />


      <Materials />

      <Separator />

      <Dashboard />

      <Footer />
    </main>
  );
}

export default App;
