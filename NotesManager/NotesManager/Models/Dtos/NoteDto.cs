﻿namespace NotesManager.Models.Dtos
{
    public class NoteDto
    {
        public int Id { get; set; }
        public string Text { get; set; } = null!;
        public string Title { get; set; } = null!;
    }
}
