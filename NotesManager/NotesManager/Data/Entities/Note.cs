namespace NotesManager.Data.Entities
{
    public class Note
    {
        public int Id { get; set; }
        public string Text { get; set; } = null!;
        public string Title { get; set; } = null!;
    }
}
