import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const handleAddQuestion = () => {
    setPage("Form");
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} onAddQuestion={handleAddQuestion} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={() => setPage("List")} />
      ) : (
        <QuestionList />
      )}
    </main>
  );
}

export default App;
