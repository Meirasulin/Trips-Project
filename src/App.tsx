import "./App.css";
import PagesProvider from "./component/Pages";
import RoutesPage from "./component/RoutesPage";
import TripDetailsProvider from "./component/providers/TripDetailsProvider";
import TripsProvider from "./component/providers/TripsProvider";
import AddProvider from "./component/providers/AddProvider";
import LogInProvider from "./component/providers/LogInProvider";
import DependencysProvider from "./component/providers/DependencyProvider";
import SignInProvider from "./component/providers/SignInProvider";
import UpdateProvider from "./component/providers/UpdateProvider";
import DeleteProvider from "./component/providers/DeleteProvider";

function App() {
  return (
    <>
      <DependencysProvider>
        <TripsProvider>
          <PagesProvider>
            <TripDetailsProvider>
              <SignInProvider>
                <LogInProvider>
                  <DeleteProvider>
                    <AddProvider>
                      <UpdateProvider>
                        <RoutesPage />
                      </UpdateProvider>
                    </AddProvider>
                  </DeleteProvider>
                </LogInProvider>
              </SignInProvider>
            </TripDetailsProvider>
          </PagesProvider>
        </TripsProvider>
      </DependencysProvider>
    </>
  );
}

export default App;
