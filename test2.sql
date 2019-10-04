PGDMP     7                	    w            quonquer    11.5    11.5     F           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            G           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            H           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            I           1262    16393    quonquer    DATABASE     f   CREATE DATABASE quonquer WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE quonquer;
             postgres    false            J           0    0    DATABASE quonquer    COMMENT     M   COMMENT ON DATABASE quonquer IS 'this is database used for ravi''s project';
                  postgres    false    3145            �            1259    16481    Article    TABLE     k  CREATE TABLE public."Article" (
    "ArticleName" character varying(50) NOT NULL,
    "ArticleAuthorID" integer NOT NULL,
    "ArticleAuthorName" character varying(50),
    "PublishedOn" character varying(10) NOT NULL,
    "ReadTime" character varying(10) NOT NULL,
    "ArticleTemplate" text NOT NULL,
    "isActive" integer,
    "ArticleID" integer NOT NULL
);
    DROP TABLE public."Article";
       public         postgres    false            �            1259    16487    Article_ArticleID_seq    SEQUENCE     �   CREATE SEQUENCE public."Article_ArticleID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Article_ArticleID_seq";
       public       postgres    false    196            K           0    0    Article_ArticleID_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."Article_ArticleID_seq" OWNED BY public."Article"."ArticleID";
            public       postgres    false    197            �            1259    16494 	   TestTable    TABLE     \   CREATE TABLE public."TestTable" (
    t1 integer NOT NULL,
    t2 character varying(123)
);
    DROP TABLE public."TestTable";
       public         postgres    false            �            1259    16492    TestTable_t1_seq    SEQUENCE     �   CREATE SEQUENCE public."TestTable_t1_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."TestTable_t1_seq";
       public       postgres    false    199            L           0    0    TestTable_t1_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."TestTable_t1_seq" OWNED BY public."TestTable".t1;
            public       postgres    false    198            �           2604    16489    Article ArticleID    DEFAULT     |   ALTER TABLE ONLY public."Article" ALTER COLUMN "ArticleID" SET DEFAULT nextval('public."Article_ArticleID_seq"'::regclass);
 D   ALTER TABLE public."Article" ALTER COLUMN "ArticleID" DROP DEFAULT;
       public       postgres    false    197    196            �           2604    16497    TestTable t1    DEFAULT     p   ALTER TABLE ONLY public."TestTable" ALTER COLUMN t1 SET DEFAULT nextval('public."TestTable_t1_seq"'::regclass);
 =   ALTER TABLE public."TestTable" ALTER COLUMN t1 DROP DEFAULT;
       public       postgres    false    199    198    199            @          0    16481    Article 
   TABLE DATA               �   COPY public."Article" ("ArticleName", "ArticleAuthorID", "ArticleAuthorName", "PublishedOn", "ReadTime", "ArticleTemplate", "isActive", "ArticleID") FROM stdin;
    public       postgres    false    196   �       C          0    16494 	   TestTable 
   TABLE DATA               -   COPY public."TestTable" (t1, t2) FROM stdin;
    public       postgres    false    199   V       M           0    0    Article_ArticleID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Article_ArticleID_seq"', 2, true);
            public       postgres    false    197            N           0    0    TestTable_t1_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."TestTable_t1_seq"', 6, true);
            public       postgres    false    198            �           2606    16499    TestTable TestTable_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."TestTable"
    ADD CONSTRAINT "TestTable_pkey" PRIMARY KEY (t1);
 F   ALTER TABLE ONLY public."TestTable" DROP CONSTRAINT "TestTable_pkey";
       public         postgres    false    199            �           2606    16491    Article p_key 
   CONSTRAINT     V   ALTER TABLE ONLY public."Article"
    ADD CONSTRAINT p_key PRIMARY KEY ("ArticleID");
 9   ALTER TABLE ONLY public."Article" DROP CONSTRAINT p_key;
       public         postgres    false    196            @   �  x��VM��6={�����kdS�@��6�5�����́�Fc�HʊR�����/雡�x�b�|1,q>�{3�#/�l��jr��~�s�f�7��7ޮ^}sw�������4X���u^F^��\��wv�֛���Iޭ�ܜ�G����B쳍�l-o�8G�B)�h9m�&}��a��-a�����011sC����w��G��axa��{�:xx�L�����Xh���0�7��{''֫����j�����i��O��*LYN6�˷��O)�I��L��u/)���(�-�MO>HC�u6/�⚦���X-T�����%�Qc��sJ[z�HuoB��ew=��P�'D8�:�j�9'�4���x3Y"�
��N��@�={�pf%��}�#*a_3�����ތ���x`�̌4y%�u����h4)o����iDoL�}���&W
����NyB%`����iG)8�@�SCbE]B�����ɑ!u�~ r-�HBT`2�7�%]4׀/j:C�=�/�LZL�\AT�(;���#"i.������ �@��	��@�h����1���C���21z��n�?��g#]��B�z�=Y�l�p�������k�}Ȉ�Fp��Z�)� dR7�$	D���t\-���-��Y���ގ��o�Ý�V�T&�`!��!ւ�$mlB���/y�R=9��=[D�3;��b�kXӡ�X��fы)"�a2��g7
v����qW�V��A6p�t�J<�G,EU�3��!r�<P�篿3��a!` �2,�_t��ʢu�%`Jcس4oT\�]�Fs�,[��/ހ��$�4�dˉ.��[�)��08�?n�܋b rYP�lHGβ�PARYK�0t=�b�e.��͵.�[���(�`<A"�-�����=��ϱOav�B�KS� �3_t�K PW1����tiJf)V�"ORh�=��A&��b��YP�Ij=�%Ӫړ;�F,�tƨG���b|�0c��"�I+�|ʐ8�K^`����P����7�����J䣠I"c�dw��m����xu��l?��9��C����鴸e�5�>,�����Ve
���aڱ0��H
�:�̹MCE>!�T��QP��.��9��������:�`M2����Vs��\o5�[��Vs��\o5�[���V�������Ϳ�9H�      C   )   x�3�L,�J�H��.N��2B���LPx�(<3^� K�J     