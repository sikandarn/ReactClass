USE [Xloop]
GO
/****** Object:  Table [dbo].[botscript_d]    Script Date: 23/05/2024 11:34:10 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[botscript_d](
	[cid] [int] IDENTITY(1,1) NOT NULL,
	[mid] [int] NULL,
	[options] [varchar](500) NULL,
	[parent_mid] [int] NULL,
	[remarks] [varchar](500) NULL,
 CONSTRAINT [PK_botscript_d] PRIMARY KEY CLUSTERED 
(
	[cid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[botscript_m]    Script Date: 23/05/2024 11:34:10 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[botscript_m](
	[mid] [int] NOT NULL,
	[BOTScript] [varchar](500) NULL,
	[scriptfor] [varchar](50) NULL,
 CONSTRAINT [PK_botscript_m] PRIMARY KEY CLUSTERED 
(
	[mid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
