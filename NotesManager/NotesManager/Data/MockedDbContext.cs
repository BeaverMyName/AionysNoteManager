using NotesManager.Data.Entities;

namespace NotesManager.Data
{
    public class MockedDbContext
    {
        public MockedDbContext()
        {
            Notes = new List<Note>
            {
                new Note() { Id = 1, Text = "Test note 1", Title = "Title 1" },
                new Note() { Id = 2, Text = "Test note 2", Title = "Title 2" },
                new Note() { Id = 3, Text = "Test note 3", Title = "Title 3" },
                new Note() { Id = 4, Text = "Test note 4", Title = "Title 4" },
                new Note() { Id = 5, Text = "Test note 5", Title = "Title 5" }
            };
        }

        public List<Note> Notes { get; set; }
    }
}
